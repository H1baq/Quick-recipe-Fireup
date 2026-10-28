"""
Local server for Sahan.

Like `python3 -m http.server`, plus:
- byte-range support, which Safari needs to play audio and video
- no caching, so edits show up on a normal refresh

Run from this folder:  python3 serve.py   (then open http://localhost:8000)
"""

import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class SahanHandler(SimpleHTTPRequestHandler):

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        range_header = self.headers.get("Range")
        path = self.translate_path(self.path)

        if not range_header or not os.path.isfile(path):
            return super().send_head()

        match = re.match(r"bytes=(\d*)-(\d*)$", range_header.strip())
        size = os.path.getsize(path)

        if not match or not (match.group(1) or match.group(2)):
            return super().send_head()

        if match.group(1):
            start = int(match.group(1))
            end = int(match.group(2)) if match.group(2) else size - 1
        else:
            # "bytes=-500" means the last 500 bytes
            start = max(size - int(match.group(2)), 0)
            end = size - 1

        end = min(end, size - 1)

        if start > end:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.end_headers()
            return None

        file = open(path, "rb")
        file.seek(start)

        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.end_headers()

        self.range_remaining = end - start + 1
        return file

    def copyfile(self, source, outputfile):
        remaining = getattr(self, "range_remaining", None)

        if remaining is None:
            return super().copyfile(source, outputfile)

        while remaining > 0:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

        self.range_remaining = None


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print(f"Sahan is cooking at http://localhost:{PORT}  (Ctrl + C to stop)")
    ThreadingHTTPServer(("", PORT), SahanHandler).serve_forever()

# Front Desk hero footage

- `background-video-jan-28_202607252000.mp4` — the original source clip. Kept for
  re-derivation; **not referenced by the site.**
- `hero-loop.mp4` — what the heroes actually play.

## Why there are two

The source clip ends on a frame far from where it starts, so `<video loop>` showed
a visible jump every 6 seconds. Measured as SSIM between the last and first frame:

| clip | seam SSIM |
| --- | --- |
| source | 0.80 |
| `hero-loop.mp4` | 0.97 |

For reference, two adjacent frames during normal playback score 0.99 — so the
remaining difference is about one frame of motion plus re-encode noise, rather
than a cut.

## Regenerating

`hero-loop.mp4` crossfades the clip's last second over its first second, so the
end runs back into the start. Output is 5s (6s source minus the 1s overlap).

```bash
ffmpeg -y -i background-video-jan-28_202607252000.mp4 -filter_complex "\
[0:v]trim=start=5:end=6,setpts=PTS-STARTPTS[tail];\
[0:v]trim=start=0:end=1,setpts=PTS-STARTPTS[head];\
[0:v]trim=start=1:end=5,setpts=PTS-STARTPTS[mid];\
[tail][head]xfade=transition=fade:duration=1:offset=0[a];\
[a][mid]concat=n=2:v=1:a=0[v]" \
  -map "[v]" -an -c:v libx264 -profile:v high -crf 18 \
  -pix_fmt yuv420p -movflags +faststart hero-loop.mp4
```

If you swap in different footage, adjust the `trim` times to that clip's duration
(the pattern is: tail = last X seconds, head = first X, mid = the remainder) and
re-check the seam before shipping:

```bash
ffmpeg -i hero-loop.mp4 -vf "select='eq(n,0)'" -vsync 0 -frames:v 1 first.png
ffmpeg -i hero-loop.mp4 -vf "select='eq(n,119)'" -vsync 0 -frames:v 1 last.png
ffmpeg -i last.png -i first.png -lavfi ssim -f null -
```

A boomerang (`[0:v]split[a][b];[b]reverse[r];[a][r]concat`) is the other option —
a longer 12s loop with no repetition, but the motion plays backwards for half of
it. It was measured at the same seam quality, so the crossfade won on file size
and on keeping the motion moving one way.

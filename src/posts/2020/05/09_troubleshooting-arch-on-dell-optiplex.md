---
title: Troubleshooting Arch Linux on a Dell Optiplex
date: 2020-05-09
published: true

keywords:
- linux
- arch
- dell
- optiplex
- boot
- usb
- fat32

---

For the past two years I've had a Dell Optiplex running as a personal server at home that set up for file storage with [Nextcloud](https://nextcloud.com/), as a media server with [Jellyfin](https://jellyfin.org/), and as a DNS server with [Pi-hole](https://pi-hole.net/). Like my personal laptop, the server has been running Arch Linux, a rolling release linux distribution. All the services have been running as Docker containers which has made maintenance very easy, and for the most part I've been able to "set it and leave it".

The PC came with a 500GB hard drive, and while it's not much, it served it's purpose well enough. A few months ago a relative gave me an old laptop as scrap, and it happened to have a 2TB hard drive I decided to swap into the PC/server. Swapping the drive was no issue, but I needed to reinstall the OS. Usually this would be pretty painless - flash the USB drive, boot the computer, install the OS - but when you need to do any significant maintenance after such a long time something is bound to go haywire.

After I got the drive swapped in and the USB flashed I tried booting the computer, but it wouldn't detect the flash drive at all. I tried resetting the BIOS, switching to different USB ports, rebooting instead of a cold boot, reflashing the drive, and multiple different flash drives. Eventually I noticed that the drive was formatted as ISO 9660. It turns out that ISO 9660 is actually the filesystem used for optical media such as CDs and DVDs. Since installation media is traditionally put on optical discs it makes sense that the image would use that filesystem, but for whatever reason the computer wouldn't recognize it.

After finding that out I needed to get the installation media onto a FAT filesystem, so I copied the files off the drive onto my computer, reformatted it, then copied them back in. While there may have been a "cleaner" way of doing this, it did end up working and I got the computer booted.

So while I don't know why the computer wouldn't recognize an ISO 9660 filesystem on a flash drive even though you would expect it to (maybe the BIOS only looks for specific filesystems depending on what type of media it's looking at?), that seemed to be the issue in the end. Just remember to ensure your installation media is written on a compatible filesystem!
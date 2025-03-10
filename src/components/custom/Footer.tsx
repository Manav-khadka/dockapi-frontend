"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

// const footerLinks = {
//   product: [
//     { name: "Features", href: "#" },
//     { name: "Security", href: "#" },
//     { name: "Team", href: "#" },
//     { name: "Enterprise", href: "#" },
//     { name: "Customer stories", href: "#" },
//     { name: "Pricing", href: "#" },
//     { name: "Resources", href: "#" },
//   ],
//   platform: [
//     { name: "Developer API", href: "#" },
//     { name: "Partners", href: "#" },
//     { name: "Electron", href: "#" },
//     { name: "Desktop", href: "#" },
//   ],
//   support: [
//     { name: "Help", href: "#" },
//     { name: "Community Forum", href: "#" },
//     { name: "Professional Services", href: "#" },
//     { name: "Skills", href: "#" },
//     { name: "Status", href: "#" },
//     { name: "Contact", href: "#" },
//   ],
//   company: [
//     { name: "About", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Careers", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Inclusion", href: "#" },
//     { name: "Social Impact", href: "#" },
//     { name: "Shop", href: "#" },
//   ],
// };

export default function Footer() {
  return (
    <footer className=" bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.platform.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Bottom bar */}
          <div className="mt-16 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground">
                  Terms
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Cookies
                </Link>
                <Link href="#" className="hover:text-foreground">
                  License
                </Link>
                <span>© 2025 DockAPI, Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/react.mjs";
import { require_lucide_react } from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-Bma8Y7Vt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
function AmbientCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let W = canvas.width = window.innerWidth;
		let H = canvas.height = window.innerHeight;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		canvas.width = W * dpr;
		canvas.height = H * dpr;
		ctx.scale(dpr, dpr);
		const mouse = {
			x: -9999,
			y: -9999
		};
		const numPoints = Math.min(75, Math.floor(W * H / 18e3));
		const pts = Array.from({ length: numPoints }, () => ({
			x: Math.random() * W,
			y: Math.random() * H,
			vx: (Math.random() - .5) * .4,
			vy: (Math.random() - .5) * .4,
			radius: Math.random() * 1.5 + .8
		}));
		const handleResize = () => {
			W = window.innerWidth;
			H = window.innerHeight;
			canvas.width = W * dpr;
			canvas.height = H * dpr;
			ctx.scale(dpr, dpr);
		};
		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", handleMouseMove);
		const draw = () => {
			ctx.clearRect(0, 0, W, H);
			const linkDist = 120;
			for (const p of pts) {
				const dx = p.x - mouse.x;
				const dy = p.y - mouse.y;
				const dist = Math.hypot(dx, dy);
				if (dist < 140) {
					p.vx += dx / dist * .04;
					p.vy += dy / dist * .04;
				}
				p.vx *= .985;
				p.vy *= .985;
				p.x += p.vx + .08;
				p.y += p.vy + .04;
				if (p.x < 0) p.x += W;
				if (p.x > W) p.x -= W;
				if (p.y < 0) p.y += H;
				if (p.y > H) p.y -= H;
			}
			for (let i = 0; i < pts.length; i++) {
				const a = pts[i];
				for (let j = i + 1; j < pts.length; j++) {
					const b = pts[j];
					const dist = Math.hypot(a.x - b.x, a.y - b.y);
					if (dist < linkDist) {
						const alpha = (1 - dist / linkDist) * .14;
						ctx.strokeStyle = `rgba(230, 199, 156, ${alpha})`;
						ctx.lineWidth = .8;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
				ctx.fillStyle = "rgba(242, 240, 234, 0.45)";
				ctx.beginPath();
				ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
				ctx.fill();
			}
			animationFrameId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "fixed inset-0 pointer-events-none z-0 w-full h-full",
		"aria-hidden": "true"
	});
}
function CustomCursor() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -100,
		y: -100
	});
	const [ringPos, setRingPos] = (0, import_react.useState)({
		x: -100,
		y: -100
	});
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let currentX = -100;
		let currentY = -100;
		let targetX = -100;
		let targetY = -100;
		let animationFrameId;
		const handleMouseMove = (e) => {
			targetX = e.clientX;
			targetY = e.clientY;
			setPos({
				x: targetX,
				y: targetY
			});
			setVisible(true);
			const isClickable = e.target?.closest("a, button, input, textarea, [role=\"button\"]");
			setIsHovered(!!isClickable);
		};
		const handleMouseLeave = () => {
			setVisible(false);
		};
		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);
		const updateRing = () => {
			currentX += (targetX - currentX) * .18;
			currentY += (targetY - currentY) * .18;
			setRingPos({
				x: currentX,
				y: currentY
			});
			animationFrameId = requestAnimationFrame(updateRing);
		};
		animationFrameId = requestAnimationFrame(updateRing);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference",
		style: {
			transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
			transition: "transform 0.04s linear"
		},
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed top-0 left-0 rounded-full border border-white/60 pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ${isHovered ? "w-12 h-12 -ml-6 -mt-6 bg-white/10 border-white" : "w-7 h-7 -ml-3.5 -mt-3.5"}`,
		style: { transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)` },
		"aria-hidden": "true"
	})] });
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [time, setTime] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const updateTime = () => {
			const ist = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false
			});
			setTime(ist);
		};
		updateTime();
		const timer = setInterval(updateTime, 1e3);
		const handleScroll = () => {
			setScrolled(window.scrollY > 30);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			clearInterval(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const navLinks = [
		{
			label: "About",
			href: "#about"
		},
		{
			label: "Achievements",
			href: "#achievements"
		},
		{
			label: "Experience",
			href: "#experience"
		},
		{
			label: "Architecture",
			href: "#work"
		},
		{
			label: "Terminal",
			href: "#terminal"
		},
		{
			label: "Stack",
			href: "#stack"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050507]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl" : "bg-transparent py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white hover:text-[#e6c79c] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] text-sm",
							children: ">_"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["YK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c]",
						children: "."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/5",
						children: link.label
					}, link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-xs text-neutral-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [time || "12:00:00", " IST"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider bg-[#e6c79c] text-black font-semibold px-4 py-2 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(230,199,156,0.35)] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Let's Talk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "w-3.5 h-3.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:hidden flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 font-mono text-xs text-neutral-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMobileMenuOpen(!mobileMenuOpen),
						className: "p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white",
						"aria-label": "Toggle menu",
						children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "w-5 h-5" })
					})]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden bg-[#090a0f]/95 border-b border-white/10 px-6 py-5 backdrop-blur-xl space-y-3",
			children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				onClick: () => setMobileMenuOpen(false),
				className: "block font-mono text-sm text-neutral-300 hover:text-[#e6c79c] py-1.5 border-b border-white/5",
				children: link.label
			}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				onClick: () => setMobileMenuOpen(false),
				className: "block w-full text-center font-mono text-xs uppercase bg-[#e6c79c] text-black font-semibold py-2.5 rounded-lg mt-3",
				children: "Let's Talk ↗"
			})]
		})]
	});
}
function GithubIcon({ className = "w-4 h-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18c-4.51 2-5-2-7-2" })]
	});
}
function LinkedinIcon({ className = "w-4 h-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "4",
				height: "12",
				x: "2",
				y: "9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "4",
				cy: "4",
				r: "2"
			})
		]
	});
}
var ROLES = [
	"large-scale web architecture",
	"autonomous AI developer agents",
	"custom npm build tooling",
	"ultra-fast Vite pipelines",
	"Tailwind CSS v4 design systems",
	"high-performance web platforms"
];
var GLYPHS = "!<>-_/[]{}=+*^?#01_~λ";
function Hero() {
	const [roleIndex, setRoleIndex] = (0, import_react.useState)(0);
	const [displayText, setDisplayText] = (0, import_react.useState)(ROLES[0]);
	const [tilt, setTilt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		let frame = 0;
		let interval;
		const targetText = ROLES[roleIndex];
		const fromText = displayText;
		const length = Math.max(fromText.length, targetText.length);
		interval = setInterval(() => {
			let output = "";
			for (let i = 0; i < length; i++) if (frame > i * 1.5 + 4) output += targetText[i] || "";
			else if (frame > i * 1.5) output += GLYPHS[Math.floor(Math.random() * 21)];
			else output += fromText[i] || "";
			setDisplayText(output);
			frame++;
			if (frame > length * 1.5 + 4) {
				setDisplayText(targetText);
				clearInterval(interval);
			}
		}, 40);
		const timer = setTimeout(() => {
			setRoleIndex((prev) => (prev + 1) % ROLES.length);
		}, 3800);
		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	}, [roleIndex]);
	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		setTilt({
			x: x * 14,
			y: -y * 14
		});
	};
	const handleMouseLeave = () => {
		setTilt({
			x: 0,
			y: 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hero-grid",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 font-mono text-xs uppercase tracking-wider backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Staff Engineer @ X0PA AI · Singapore / India" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif text-2xl sm:text-3xl text-neutral-400 italic mb-1",
							children: "Hey, I'm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shimmer-text",
								children: "Yathin K"
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl sm:text-3xl font-medium tracking-tight text-neutral-200 flex items-baseline gap-2 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I architect" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "serif text-[#e6c79c] font-normal text-2xl sm:text-4xl",
									children: displayText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-6 bg-[#e6c79c] inline-block animate-pulse align-middle" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed",
							children: [
								"Front-End Architect & Staff Engineer with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-neutral-200",
									children: "6+ years"
								}),
								" designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-white",
									children: "React, Next.js, Vite 8, and Tailwind CSS v4"
								}),
								", actively expanding systems engineering via ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[#e6c79c]",
									children: "Rust & Bun"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									className: "group flex items-center gap-2 bg-[#f2f0ea] text-black font-semibold font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#e6c79c] transition-all duration-200 hover:shadow-[0_0_25px_rgba(230,199,156,0.35)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "See my work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowDownRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#terminal",
									className: "group flex items-center gap-2 bg-white/[0.04] border border-white/10 hover:border-[#e6c79c]/50 text-neutral-200 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-white/[0.08] transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Terminal, { className: "w-4 h-4 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Interactive Terminal" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 pl-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/yathink3",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "p-3 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all",
										"aria-label": "GitHub Profile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://linkedin.com/in/yathink3/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "p-3 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#0077b5] hover:border-white/30 transition-all",
										"aria-label": "LinkedIn Profile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedinIcon, { className: "w-4 h-4" })
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 relative perspective-[1000px]",
					onMouseMove: handleMouseMove,
					onMouseLeave: handleMouseLeave,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full rounded-2xl bg-[#090a0f]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl transition-transform duration-200 ease-out",
							style: { transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-red-500/80 inline-block" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-yellow-500/80 inline-block" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-green-500/80 inline-block" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-xs text-neutral-400 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Terminal, { className: "w-3 h-3 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "~/yathin — zsh" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-neutral-600",
										children: "v8.4.1"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3.5 text-neutral-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#34d399]",
											children: "❯"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: "whoami"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-neutral-400 pl-4 pt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#e6c79c] font-semibold",
													children: "yathin"
												}),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-600",
													children: "// Staff Engineer @ X0PA AI"
												})
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#34d399]",
											children: "❯"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: "cat stack.json"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "text-neutral-400 pl-4 pt-1 font-mono text-[11px] leading-tight text-[#d4d4d8]",
											children: `{
  "role": "Staff Engineer & Architect",
  "frontend": ["React 19", "Next.js", "TypeScript"],
  "tooling": ["Vite 8", "Bun", "Tailwind v4"],
  "ai_agents": ["Claude Code", "n8n", "CI/CD Automations"],
  "systems": ["Rust", "Node.js"]
}`
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#34d399]",
											children: "❯"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: "pnpm test:metrics"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pl-4 pt-1 space-y-1 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-emerald-400",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✔" }),
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vite Migration: -50% build time" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-cyan-400",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✔" }),
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI Agent Workflows: +30% efficiency" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-[#e6c79c]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✔" }),
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Maintainability: +40% across apps" })
													]
												})
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 pt-1 text-neutral-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#34d399]",
											children: "❯"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-4 bg-[#e6c79c] inline-block animate-pulse" })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-2.5 absolute -bottom-6 -left-6 bg-[#0c0d12]/95 border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Zap, { className: "w-4 h-4 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white font-bold block",
									children: "+50% Vite Speedup"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-neutral-500 text-[10px]",
									children: "Critical Build Migration"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-2.5 absolute -top-6 -right-4 bg-[#0c0d12]/95 border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Cpu, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white font-bold block",
									children: "6+ Years Exp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-neutral-500 text-[10px]",
									children: "Staff Engineer & Architect"
								})]
							})]
						})
					]
				})]
			})
		})]
	});
}
var BADGES = [
	"React & TypeScript Expert",
	"Staff Engineer @ X0PA AI",
	"Vite 8 Migration Architect",
	"Tailwind CSS v4 Lead",
	"Autonomous AI Developer Agents",
	"Claude Code & n8n Workflows",
	"Node.js & Bun Tooling",
	"Rust Systems Exploration",
	"Next.js & TanStack Start",
	"Framer Motion & Astro.js",
	"IBM Carbon & Ant Design Systems",
	"Custom NPM Library Author",
	"CI/CD & Cloud Pipeline Automation"
];
function MarqueeTicker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-6 border-y border-white/[0.08] bg-black/40 backdrop-blur-md overflow-hidden relative select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-inner flex items-center gap-8 text-neutral-400 font-mono text-xs sm:text-sm uppercase tracking-widest",
			children: [...BADGES, ...BADGES].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-8 whitespace-nowrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hover:text-[#e6c79c] transition-colors",
					children: item
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#e6c79c]/60 text-xs",
					children: "✦"
				})]
			}, index))
		})
	});
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 sm:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 — About" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16",
					children: ["Architecting systems, tooling, & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "serif text-[#e6c79c] font-normal",
						children: "intelligence."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 relative flex justify-center lg:justify-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-72 sm:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-neutral-900",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/yathin.png",
									alt: "Yathin K — Staff Engineer",
									className: "w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 contrast-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "portrait-scanline" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 right-4 flex justify-between items-center z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "X0PA AI" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-400",
										children: "📍 Singapore / IN"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs text-white font-medium",
										children: "Yathin K"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-mono text-[#e6c79c]",
										children: "Staff Engineer & Frontend Architect"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden sm:block absolute -bottom-8 -right-4 w-32 h-32 pointer-events-none z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-full h-full badge-rotate",
								viewBox: "0 0 200 200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									id: "badgeCircle",
									d: "M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									className: "font-mono text-[11px] fill-[#e6c79c] uppercase tracking-widest font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
										href: "#badgeCircle",
										children: "• YATHIN K • STAFF ENGINEER • FRONTEND ARCHITECT"
									})
								})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal",
								children: [
									"I am a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-white font-semibold",
										children: "Staff Engineer and Front-End Architect"
									}),
									" with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm sm:text-base text-neutral-400 leading-relaxed",
								children: [
									"My engineering philosophy focuses on deep expertise across the modern JavaScript/TypeScript ecosystem (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-neutral-200",
										children: "React, Next.js, Vite, Tailwind CSS"
									}),
									") with a core passion for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-[#e6c79c]",
										children: "engineering build systems, custom npm libraries, and architectural resilience"
									}),
									" over high-level UI development."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm sm:text-base text-neutral-400 leading-relaxed",
								children: [
									"I have a proven track record leading critical infrastructure migrations (including ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-neutral-200",
										children: "Vite 8 and Tailwind CSS v4"
									}),
									"), authoring internal tooling and open-source plugins, and driving technical vision across cross-functional engineering teams. Today, I am also actively expanding systems engineering capabilities via ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-[#e6c79c]",
										children: "Rust and Bun"
									}),
									" for next-generation web tooling."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-[#090a0f] border border-white/10 p-4 font-mono text-xs text-neutral-400 space-y-2 mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-neutral-500 text-[11px] pb-1 border-b border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Terminal, { className: "w-3.5 h-3.5 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "yathin@host: ~/core-philosophy" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-neutral-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400",
											children: "$"
										}), " cat vision.md"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-neutral-400 italic",
										children: "“Engineering build systems, custom npm libraries, and architecture over superficial UI. Speed, determinism, and developer delight come from foundational foundations.”"
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-16",
					children: [
						{
							value: "6+",
							label: "Years Experience",
							sub: "Enterprise Web & Architecture",
							icon: import_lucide_react.Gauge
						},
						{
							value: "50%",
							label: "Build Time Slashed",
							sub: "Through custom Vite integration",
							icon: import_lucide_react.Rocket
						},
						{
							value: "40%",
							label: "Maintainability Gain",
							sub: "Legacy systems upgraded to Next.js",
							icon: import_lucide_react.Code2
						},
						{
							value: "10+",
							label: "Engineers Mentored",
							sub: "Improving sprint velocity by 15%",
							icon: import_lucide_react.Users
						}
					].map((s, idx) => {
						const Icon = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spot-card p-6 rounded-2xl flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-neutral-500 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-neutral-600",
									children: ["0", idx + 1]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mb-1",
									children: s.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs text-neutral-300 font-semibold uppercase tracking-wider",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-neutral-500 mt-1 leading-snug",
									children: s.sub
								})
							] })]
						}, idx);
					})
				})
			]
		})
	});
}
function AchievementsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "achievements",
		className: "py-24 relative bg-black/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 — Key Achievements" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["Proven impact in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "serif text-[#e6c79c] font-normal",
							children: "production."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400 text-sm sm:text-base mt-2",
						children: "High-leverage engineering deliverables across performance, AI systems, and architecture."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs text-neutral-500 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified metrics from enterprise engagements" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [
						{
							metric: "50% Speedup",
							title: "Performance & Build Optimization",
							category: "Build Systems",
							description: "Spearheaded the complete migration of legacy bundlers (CRA/Webpack) to Vite across enterprise frontend repositories. Reduced cold build and HMR times by over 50%, resulting in dramatically faster CI test pipelines and daily engineering velocity.",
							icon: import_lucide_react.Zap,
							tags: [
								"Vite 8",
								"Rollup",
								"ESBuild",
								"HMR Tuning",
								"CI/CD Pipelines"
							],
							highlightColor: "text-[#e6c79c]",
							statBadge: "-50% Build Time"
						},
						{
							metric: "30% Efficiency",
							title: "Enterprise AI Integration & Agents",
							category: "AI & Automation",
							description: "Architected and deployed custom AI agents and automation tooling leveraging Claude Code and n8n workflows. Automated repetitive development tasks, automated PR sanity checks, and accelerated project workflows by 30% while eliminating manual bottlenecks.",
							icon: import_lucide_react.Bot,
							tags: [
								"Claude Code",
								"n8n",
								"Autonomous Agents",
								"LLM Automation",
								"Productivity"
							],
							highlightColor: "text-emerald-400",
							statBadge: "+30% Process Speed"
						},
						{
							metric: "40% Boost",
							title: "Legacy Modernization & Architecture",
							category: "System Evolution",
							description: "Led architectural refactoring of monolithic and legacy React applications into modern Next.js JAMstack platforms and clean TypeScript architectures. Boosted codebase maintainability and runtime performance metrics by 40%.",
							icon: import_lucide_react.Layers,
							tags: [
								"Next.js",
								"React 19",
								"TypeScript",
								"Clean Architecture",
								"Refactoring"
							],
							highlightColor: "text-cyan-400",
							statBadge: "+40% Maintainability"
						},
						{
							metric: "15% Velocity",
							title: "Engineering Mentorship & Delivery",
							category: "Leadership & Culture",
							description: "Mentored 10+ junior and mid-level software engineers across multiple squads. Established code review standards, modern TypeScript patterns, and component design systems—improving cross-team sprint delivery timelines by 15%.",
							icon: import_lucide_react.Award,
							tags: [
								"10+ Developers",
								"Design Systems",
								"Code Standards",
								"Talent Growth"
							],
							highlightColor: "text-amber-300",
							statBadge: "+15% Sprint Speed"
						}
					].map((item, index) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spot-card p-8 rounded-3xl flex flex-col justify-between group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-5 h-5 ${item.highlightColor}` })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] uppercase tracking-wider text-neutral-500 block",
										children: item.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-white group-hover:text-[#e6c79c] transition-colors",
										children: item.title
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300",
									children: item.statBadge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-neutral-400 leading-relaxed mb-6",
								children: item.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5 pt-4 border-t border-white/5",
								children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-neutral-400 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md",
									children: tag
								}, tag))
							}) })]
						}, index);
					})
				})
			]
		})
	});
}
function ExperienceSection() {
	const [activeTab, setActiveTab] = (0, import_react.useState)(0);
	const experiences = [
		{
			role: "Staff Engineer",
			company: "X0PA AI",
			period: "04/2025 — Present",
			location: "Singapore",
			type: "Full-time · Platform Architecture",
			highlights: [
				"Led end-to-end system architecture and roadmap planning for large-scale React/Next.js enterprise applications.",
				"Aligned cross-functional teams on technical vision, delivery milestones, and scalable architectural principles.",
				"Built autonomous AI agents to automate repetitive engineering workflows, streamlining delivery and accelerating team productivity.",
				"Integrated AI-driven developer tooling to enhance product reliability, real-time performance monitoring, and CI/CD automation.",
				"Driving architectural decisions across frontend platforms, establishing unified reusable design systems and performance standards across business units."
			],
			skills: [
				"React 19",
				"Next.js",
				"AI Agents",
				"Claude Code",
				"System Architecture",
				"CI/CD Automation",
				"Bun & Rust"
			]
		},
		{
			role: "Senior Software Engineer II",
			company: "X0PA AI",
			period: "02/2024 — Present",
			location: "Singapore",
			type: "Full-time · Engineering Leadership",
			highlights: [
				"Spearheaded enterprise-grade applications using Next.js and React, enforcing modular scalability across distributed systems.",
				"Refactored legacy codebases into optimized, reusable React functional components with strict TypeScript contracts.",
				"Championed performance engineering by migrating existing builds to Vite, reducing build durations by over 50%.",
				"Implemented smooth transitions and high-performance micro-interactions using Framer Motion and Astro.js.",
				"Collaborated with design teams utilizing Ant Design and Carbon Components to ensure accessibility and consistent UX.",
				"Authored internal UI utility libraries, custom hooks, and shared tooling to streamline velocity across multiple squads.",
				"Mentored 10+ engineers and led technical code reviews, enforcing best-in-class architectural practices."
			],
			skills: [
				"TypeScript",
				"Vite 8",
				"Framer Motion",
				"Astro.js",
				"IBM Carbon",
				"Ant Design",
				"Mentorship"
			]
		},
		{
			role: "Senior Software Engineer",
			company: "X0PA AI",
			period: "01/2023 — 01/2024",
			location: "Kasaragod, India",
			type: "Full-time · Frontend Platform",
			highlights: [
				"Developed robust, maintainable enterprise React applications leveraging modern component architectures.",
				"Engineered high-performance Next.js JAMstack applications combining SSR and CSR for optimized page loads and SEO.",
				"Designed sleek, professional enterprise interfaces using Ant Design, providing an intuitive and seamless user journey.",
				"Built animated page flows in Next.js with Framer Motion, enhancing user engagement and visual polish.",
				"Delivered static web properties using Astro.js to guarantee near-instant first paint times and zero unused JS."
			],
			skills: [
				"React",
				"Next.js",
				"Astro.js",
				"Ant Design",
				"JAMstack",
				"SSR/CSR"
			]
		},
		{
			role: "Software Engineer II",
			company: "Recro",
			period: "12/2021 — 12/2022",
			location: "Bangalore, India",
			type: "Full-time · Frontend Consulting",
			highlights: [
				"Built stable and maintainable component-driven web applications using React.",
				"Converted legacy Create React App (CRA) tooling to Vite, accelerating application load and build speeds by 3.5x.",
				"Engineered interfaces adhering strictly to IBM Carbon Design System using Carbon Components React.",
				"Created shared utility libraries and custom hooks to eliminate boilerplate and enhance runtime performance.",
				"Standardized state management across complex features using Redux Toolkit."
			],
			skills: [
				"React",
				"Vite",
				"Redux Toolkit",
				"IBM Carbon Components",
				"Build Speedup (3.5x)"
			]
		},
		{
			role: "Software Engineer",
			company: "Valor PayTech",
			period: "11/2020 — 12/2021",
			location: "Chennai, India",
			type: "Full-time · Fintech UI",
			highlights: [
				"Developed interactive user interfaces using React JS and Flux architecture for complex Single Page Applications.",
				"Implemented client-side SPA routing using React Router with guarded transitions.",
				"Built drag-and-drop interactive dashboards utilizing React-Draggable for fintech analytics.",
				"Collaborated closely with backend engineers to integrate RESTful endpoints with Redux state containers.",
				"Authored action creators, asynchronous dispatch flows, and managed Git versioning workflows."
			],
			skills: [
				"React JS",
				"React-Draggable",
				"Flux / Redux",
				"SPA Architecture",
				"Fintech"
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "py-24 sm:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 — Experience" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["Where I've ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "serif text-[#e6c79c] font-normal",
							children: "architected."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400 text-sm sm:text-base mt-2",
						children: "6+ years scaling platforms from early fintech SPAs to enterprise AI platforms."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs text-neutral-500",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Career trajectory · 2020 — Present" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4 space-y-2",
						children: [experiences.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab(idx),
							className: `w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${activeTab === idx ? "bg-white/[0.08] border-[#e6c79c]/50 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold text-white group-hover:text-[#e6c79c] transition-colors",
										children: exp.company
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400",
										children: exp.location
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-neutral-400 mt-1",
									children: exp.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] text-neutral-500 mt-0.5",
									children: exp.period
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: `w-4 h-4 transition-transform ${activeTab === idx ? "text-[#e6c79c] translate-x-1" : "text-neutral-600"}` })]
						}, idx)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-xs text-[#e6c79c] mb-2 uppercase tracking-wider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.GraduationCap, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Education" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-white",
									children: "B.E. in Information Science Engineering"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-neutral-400 mt-1",
									children: "Vivekananda College of Engineering & Technology, Puttur"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] text-neutral-500 mt-1",
									children: "2015 — 2019 · Kasaragod / Karnataka"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: experiences[activeTab] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spot-card p-8 sm:p-10 rounded-3xl space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs uppercase tracking-wider text-[#e6c79c] block mb-1",
										children: experiences[activeTab].type
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-2xl font-bold text-white",
										children: [
											experiences[activeTab].role,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-neutral-400 font-normal",
												children: ["@ ", experiences[activeTab].company]
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-xs space-y-1 text-right sm:text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-neutral-300 flex items-center sm:justify-end gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Calendar, { className: "w-3.5 h-3.5 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: experiences[activeTab].period })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-neutral-500 flex items-center sm:justify-end gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MapPin, { className: "w-3.5 h-3.5 text-neutral-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: experiences[activeTab].location })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-mono text-xs uppercase tracking-wider text-neutral-400",
										children: "Key Architectural Responsibilities & Impact"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3",
										children: experiences[activeTab].highlights.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm text-neutral-300 leading-relaxed",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[#e6c79c] text-xs mt-1 select-none",
												children: ">"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-6 border-t border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs text-neutral-400 mb-3 uppercase tracking-wider",
										children: "Core Technologies"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: experiences[activeTab].skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:border-[#e6c79c]/40 hover:text-white transition-colors",
											children: skill
										}, skill))
									})]
								})
							]
						})
					})]
				})
			]
		})
	});
}
function WorkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "py-24 sm:py-32 relative bg-black/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04 — Architecture & Work" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["Selected engineering & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "serif text-[#e6c79c] font-normal",
							children: "tooling."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400 text-sm sm:text-base mt-2",
						children: "Production libraries, compiler experiments, design systems, and developer infrastructure."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/yathink3",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 font-mono text-xs text-[#e6c79c] hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View all GitHub repositories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { className: "w-3.5 h-3.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						{
							title: "bun-as-vite",
							category: "Systems & Tooling",
							description: "High-performance bundler bridge benchmarking Bun runtime against Vite module resolution. Explores zero-overhead ES module compilation and sub-second cold starts for next-gen web tooling.",
							badge: "Systems Experiment",
							tags: [
								"Bun",
								"Vite",
								"TypeScript",
								"Node.js",
								"Compiler Perf"
							],
							github: "https://github.com/yathink3/bun-as-vite",
							icon: import_lucide_react.Zap
						},
						{
							title: "react-smart-pdf-viewer",
							category: "Open Source Library",
							description: "Virtualized enterprise PDF viewer component for React applications. Features memory-efficient tile streaming, text layer selection, search indexing, and custom annotation hooks.",
							badge: "NPM Library",
							tags: [
								"React 19",
								"TypeScript",
								"Canvas API",
								"Virtualization",
								"NPM"
							],
							github: "https://github.com/yathink3/react-smart-pdf-viewer",
							icon: import_lucide_react.Layers
						},
						{
							title: "vite-proxy-redirects-plugin",
							category: "Developer Tooling",
							description: "Production Vite plugin designed to handle microfrontend local proxies, dynamic rewrite rules, and single-page application route fallbacks in complex enterprise multi-service environments.",
							badge: "Vite Ecosystem",
							tags: [
								"Vite 8",
								"Rollup Plugin",
								"Dev Server",
								"HTTP Proxies"
							],
							github: "https://github.com/yathink3/vite-proxy-redirects-plugin",
							icon: import_lucide_react.Terminal
						},
						{
							title: "carbon-react-color-theme",
							category: "Design Systems",
							description: "Comprehensive theme package and color palette engine implementing IBM Carbon Design System tokens for modern React applications and editor ecosystems (including Zed extensions).",
							badge: "Design System",
							tags: [
								"IBM Carbon",
								"Theme Tokens",
								"CSS Variables",
								"Zed Editor"
							],
							github: "https://github.com/yathink3/carbon-react-color-theme",
							icon: import_lucide_react.Cpu
						},
						{
							title: "yk-editor",
							category: "Developer Tools",
							description: "Specialized developer code editing environment with intelligent syntax highlighting, lightweight state management, custom keyboard macros, and AI agent integration hooks.",
							badge: "Dev Utility",
							tags: [
								"React",
								"TypeScript",
								"Monaco API",
								"AST Parsing"
							],
							github: "https://github.com/yathink3/yk-editor",
							icon: import_lucide_react.FolderGit2
						},
						{
							title: "Autonomous AI CI/CD Agent Suite",
							category: "Enterprise Automation",
							description: "End-to-end agentic workflow orchestrations utilizing Claude Code and n8n webhooks. Automates changelog syntheses, regression impact checks, and deployment health monitoring.",
							badge: "AI Architecture",
							tags: [
								"Claude Code",
								"n8n",
								"GitHub Actions",
								"AI Agents",
								"Automation"
							],
							github: "https://github.com/yathink3",
							icon: import_lucide_react.Sparkles
						}
					].map((proj, idx) => {
						const Icon = proj.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spot-card p-6 rounded-3xl flex flex-col justify-between group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[#e6c79c]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400",
										children: proj.badge
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1",
									children: proj.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-xl font-bold text-white group-hover:text-[#e6c79c] transition-colors mb-2.5 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proj.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#e6c79c]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6",
									children: proj.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5 pt-4 border-t border-white/5",
								children: proj.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-neutral-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded",
									children: tag
								}, tag))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: proj.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inspect code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "w-3.5 h-3.5 text-[#e6c79c]" })]
							})] })]
						}, idx);
					})
				})
			]
		})
	});
}
function InteractiveTerminal() {
	const [input, setInput] = (0, import_react.useState)("");
	const [history, setHistory] = (0, import_react.useState)([]);
	const [historyIndex, setHistoryIndex] = (0, import_react.useState)(-1);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [themeMode, setThemeMode] = (0, import_react.useState)("amber");
	const bottomRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const initialOutputs = [{
		command: "neofetch",
		output: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1 font-mono text-xs",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-12 gap-4 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "sm:col-span-4 text-[#e6c79c] leading-tight select-none",
					children: `    ___   __  ___  __
   /   | / / /   |/ /
  / /| |/ / / /| ' / 
 / ___ / /_/ ___  /  
/_/  |_\\___/_/  |_/   
                      
  YK - STAFF ENGINEER`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-8 space-y-1 text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "yathin@antigravity-darwin"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-neutral-500",
							children: "--------------------------"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "OS:"
						}), " macOS Sequoia / Darwin 24 (arm64)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Host:"
						}), " MacBook Pro M-Series"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Kernel:"
						}), " 24.1.0-release"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Uptime:"
						}), " 6+ Years Engineering Enterprise Systems"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Shell:"
						}), " zsh 5.9 (x86_64-apple-darwin24.0)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Primary Role:"
						}), " Staff Engineer @ X0PA AI"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Core Stack:"
						}), " React 19, TypeScript, Next.js, Vite 8, Tailwind v4"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400",
							children: "Expanding:"
						}), " Rust, Bun, Autonomous AI Agents (Claude Code, n8n)"] })
					]
				})]
			})
		})
	}, {
		command: "help",
		output: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 text-xs font-mono",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-neutral-400",
				children: "Available commands in Yathin's developer shell:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-neutral-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "whoami"
					}), " — Identity & current focus"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "summary"
					}), " — Deep architectural overview"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "exp"
					}), " — Career trajectory & roles"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "achievements"
					}), " — Key 50% & 40% performance wins"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "skills"
					}), " — Categorized tech competencies"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "projects"
					}), " — Open-source & developer tooling"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "contact"
					}), " — Email, phone numbers & profiles"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "cat resume.txt"
					}), " — Complete plain-text resume"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "neofetch"
					}), " — Print system specifications"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] font-semibold",
						children: "clear"
					}), " — Wipe terminal screen"] })
				]
			})]
		})
	}];
	const [outputs, setOutputs] = (0, import_react.useState)(initialOutputs);
	const handleCommand = (cmdText) => {
		const trimmed = cmdText.trim().toLowerCase();
		if (!trimmed) return;
		setHistory((prev) => [...prev, cmdText]);
		setHistoryIndex(-1);
		let out = null;
		switch (trimmed) {
			case "help":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 text-xs font-mono",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400",
						children: "Commands:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-neutral-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "whoami"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "summary"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "exp"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "achievements"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "skills"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "projects"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "contact"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "neofetch"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "cat resume.txt"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c]",
								children: "clear"
							})
						]
					})]
				});
				break;
			case "whoami":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "Yathin K"
						}), " — Staff Engineer @ X0PA AI | Ex-Recro"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400",
							children: "React & TypeScript Expert | Next.js | TailwindCSS | Node.js & Bun | Building Scalable Web Platforms | AI & Automation Tools (n8n, Claude Code) | Exploring Rust"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-500",
							children: "📍 Singapore & Kasaragod, India"
						})
					]
				});
				break;
			case "summary":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#e6c79c] font-semibold",
							children: "// PROFESSIONAL SUMMARY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed",
							children: "Highly accomplished Staff Engineer and Front-End Architect with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise across the modern JavaScript/TypeScript ecosystem (React, Next.js, Vite, Tailwind CSS) with a core passion for engineering build systems, custom npm libraries, and architecture over high-level UI development."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400",
							children: "Proven track record leading critical infrastructure migrations (including Vite 8 and Tailwind CSS v4), building open-source plugins, and driving technical vision across cross-functional teams. Actively expanding systems engineering capabilities via Rust and Bun for next-generation web tooling."
						})
					]
				});
				break;
			case "exp":
			case "experience":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#e6c79c] font-bold",
								children: "01. Staff Engineer @ X0PA AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-500",
								children: "04/2025 — Present · Singapore"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-400",
								children: "Led end-to-end system architecture & roadmap for React/Next.js platforms; deployed AI developer agents & automated CI/CD workflows."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#e6c79c] font-bold",
								children: "02. Senior Software Engineer II @ X0PA AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-500",
								children: "02/2024 — Present · Singapore"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-400",
								children: "Enterprise architecture; 50% build time reduction via Vite; internal UI libraries; mentored 10+ junior developers."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#e6c79c] font-bold",
								children: "03. Senior Software Engineer @ X0PA AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-500",
								children: "01/2023 — 01/2024 · Kasaragod, India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-400",
								children: "Modern Next.js JAMstack SSR/CSR, Ant Design design system, Astro.js static websites, Framer Motion page transitions."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#e6c79c] font-bold",
								children: "04. Software Engineer II @ Recro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-500",
								children: "12/2021 — 12/2022 · Bangalore, India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-400",
								children: "CRA to Vite migration (3.5x faster), IBM Carbon Components, custom utility hooks library, Redux Toolkit."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#e6c79c] font-bold",
								children: "05. Software Engineer @ Valor PayTech"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-500",
								children: "11/2020 — 12/2021 · Chennai, India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-neutral-400",
								children: "React JS SPA, React-Draggable drag & drop UI, Flux/Redux action creators, Git workflows."
							})
						] })
					]
				});
				break;
			case "achievements":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[#e6c79c] font-semibold",
							children: "// KEY PRODUCTION ACHIEVEMENTS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 rounded bg-white/5 border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-400 font-bold",
								children: "[1] Performance Optimization:"
							}), " Increased system performance by 50% through Vite integration, slashing cold build and HMR times."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 rounded bg-white/5 border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan-400 font-bold",
								children: "[2] AI Integration Success:"
							}), " Implemented AI automation tools (n8n, Claude Code) improving process efficiency by 30% and eliminating manual workflows."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 rounded bg-white/5 border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e6c79c] font-bold",
								children: "[3] Legacy System Upgrade:"
							}), " Converted legacy architectures to modern frameworks, lifting codebase maintainability and performance by 40%."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 rounded bg-white/5 border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-300 font-bold",
								children: "[4] Mentorship Excellence:"
							}), " Mentored 10 junior developers, improving project delivery timelines by 15%."]
						})
					]
				});
				break;
			case "skills":
			case "stack":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "Frontend:"
						}), " React 19, TypeScript, Next.js, TanStack Start & Router, Astro.js"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-400 font-bold",
							children: "Build & Tooling:"
						}), " Vite 8, Bun, Node.js, Webpack, Custom NPM Libraries, Rollup"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cyan-400 font-bold",
							children: "Styling & UI:"
						}), " Tailwind CSS v4, IBM Carbon Components, Ant Design, Framer Motion"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-purple-400 font-bold",
							children: "AI & Automation:"
						}), " Claude Code, n8n, AI Agent Workflows, CI/CD Pipeline Automation"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber-400 font-bold",
							children: "Systems & Exploration:"
						}), " Rust, Systems Programming, Zsh, Git"] })
					]
				});
				break;
			case "projects":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "1. bun-as-vite"
						}), " — Compiler bridge benchmarking Bun against Vite for sub-second builds."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "2. react-smart-pdf-viewer"
						}), " — Virtualized React enterprise PDF viewing library."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "3. vite-proxy-redirects-plugin"
						}), " — Production Vite plugin managing microfrontend proxy routes."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "4. carbon-react-color-theme"
						}), " — IBM Carbon Design System tokens for React & Zed editor."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e6c79c] font-bold",
							children: "5. yk-editor"
						}), " — Custom developer code editing suite with AI completions."] })
					]
				});
				break;
			case "contact":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 text-xs font-mono text-neutral-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500",
								children: "Email:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:yathink3@gmail.com",
								className: "text-[#e6c79c] underline",
								children: "yathink3@gmail.com"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500",
								children: "Phone (India):"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: "+91 8281166822"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500",
								children: "Phone (Singapore):"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: "+65 84394761"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500",
								children: "LinkedIn:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://linkedin.com/in/yathink3/",
								target: "_blank",
								rel: "noreferrer",
								className: "text-[#0077b5] underline",
								children: "linkedin.com/in/yathink3"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500",
								children: "GitHub:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/yathink3",
								target: "_blank",
								rel: "noreferrer",
								className: "text-white underline",
								children: "github.com/yathink3"
							})
						] })
					]
				});
				break;
			case "cat resume.txt":
			case "cat resume":
			case "resume":
				out = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "text-neutral-400 text-[11px] font-mono leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5 overflow-x-auto",
					children: `======================================================================
YATHIN K — STAFF ENGINEER & FRONTEND ARCHITECT
Singapore & Kasaragod, India | yathink3@gmail.com | +91 8281166822
LinkedIn: https://linkedin.com/in/yathink3/ | GitHub: https://github.com/yathink3
======================================================================

SUMMARY:
Highly accomplished Staff Engineer and Front-End Architect with over 6+ 
years of specialized experience designing, optimizing, and scaling enterprise 
web applications, AI automation tools, and high-performance developer tooling. 
Deep expertise across React, Next.js, Vite, and Tailwind CSS. Proven track 
record leading Vite 8 and Tailwind CSS v4 migrations and authoring custom npm 
libraries. Actively expanding systems engineering capabilities via Rust and Bun.

KEY ACHIEVEMENTS:
• Performance: +50% system performance through Vite integration
• AI Automation: +30% process efficiency through automated AI developer tools
• Legacy Upgrade: +40% codebase maintainability via Next.js modern architecture
• Mentorship: Mentored 10 junior developers, improving delivery speed by 15%

EXPERIENCE:
• Staff Engineer | X0PA AI, Singapore (04/2025 – Present)
• Senior Software Engineer II | X0PA AI, Singapore (02/2024 – Present)
• Senior Software Engineer | X0PA AI, Kasaragod, India (01/2023 – 01/2024)
• Software Engineer II | Recro, Bangalore, India (12/2021 – 12/2022)
• Software Engineer | Valor PayTech, Chennai, India (11/2020 – 12/2021)

EDUCATION:
• Bachelor of Engineering, Information Science Engineering
  Vivekananda College of Engineering & Technology, Puttur (2015 – 2019)`
				});
				break;
			case "neofetch":
				out = initialOutputs[0].output;
				break;
			case "clear":
				setOutputs([]);
				return;
			default: out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs font-mono text-red-400",
				children: [
					"command not found: ",
					trimmed,
					". Type ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e6c79c] underline cursor-pointer",
						onClick: () => handleCommand("help"),
						children: "help"
					}),
					" to view all commands."
				]
			});
		}
		setOutputs((prev) => [...prev, {
			command: cmdText,
			output: out
		}]);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleCommand(input);
		setInput("");
	};
	const handleKeyDown = (e) => {
		if (e.key === "ArrowUp") {
			e.preventDefault();
			if (history.length > 0) {
				const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
				setHistoryIndex(nextIndex);
				setInput(history[nextIndex]);
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (historyIndex !== -1) {
				const nextIndex = historyIndex + 1;
				if (nextIndex < history.length) {
					setHistoryIndex(nextIndex);
					setInput(history[nextIndex]);
				} else {
					setHistoryIndex(-1);
					setInput("");
				}
			}
		}
	};
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [outputs]);
	const copyPlainResume = () => {
		navigator.clipboard.writeText(`YATHIN K — STAFF ENGINEER & FRONTEND ARCHITECT
Email: yathink3@gmail.com | Phone: +918281166822, +6584394761
LinkedIn: https://linkedin.com/in/yathink3/ | GitHub: https://github.com/yathink3

SUMMARY:
Highly accomplished Staff Engineer and Front-End Architect with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise across React, Next.js, Vite, and Tailwind CSS. Proven track record leading critical infrastructure migrations (including Vite 8 and Tailwind CSS v4). Actively expanding systems engineering capabilities via Rust and Bun.`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const quickCommands = [
		"whoami",
		"achievements",
		"exp",
		"skills",
		"projects",
		"cat resume.txt",
		"contact",
		"clear"
	];
	const themeColors = {
		amber: "text-[#e6c79c]",
		emerald: "text-[#34d399]",
		cyan: "text-[#38bdf8]"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "terminal",
		className: "py-24 sm:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05 — Interactive Terminal" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["Hardcore developer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "serif text-[#e6c79c] font-normal",
							children: "CLI."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400 text-sm sm:text-base mt-2",
						children: "Execute live commands directly or click the quick pills below to explore career data."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copyPlainResume,
							className: "flex items-center gap-1.5 font-mono text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-all",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy Resume" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOutputs([]),
							className: "flex items-center gap-1 font-mono text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1.5 rounded-lg transition-all",
							title: "Clear terminal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Trash2, { className: "w-3.5 h-3.5" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-neutral-500 self-center mr-1",
						children: "Quick run:"
					}), quickCommands.map((cmd) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleCommand(cmd),
						className: "font-mono text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-[#e6c79c]/60 hover:bg-white/[0.08] transition-all",
						children: ["$ ", cmd]
					}, cmd))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-[#090a0f] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden font-mono",
					onClick: () => inputRef.current?.focus(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/10 select-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-[#ff5f56]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-xs text-neutral-400 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Terminal, { className: `w-3.5 h-3.5 ${themeColors[themeMode]}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "yathin@antigravity: ~/portfolio (zsh)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setThemeMode("amber"),
										className: `w-3.5 h-3.5 rounded-full bg-[#e6c79c] transition-opacity ${themeMode === "amber" ? "ring-2 ring-white/50" : "opacity-40 hover:opacity-80"}`,
										title: "Amber theme"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setThemeMode("emerald"),
										className: `w-3.5 h-3.5 rounded-full bg-[#34d399] transition-opacity ${themeMode === "emerald" ? "ring-2 ring-white/50" : "opacity-40 hover:opacity-80"}`,
										title: "Green phosphor theme"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setThemeMode("cyan"),
										className: `w-3.5 h-3.5 rounded-full bg-[#38bdf8] transition-opacity ${themeMode === "cyan" ? "ring-2 ring-white/50" : "opacity-40 hover:opacity-80"}`,
										title: "Matrix cyan theme"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 max-h-[540px] overflow-y-auto space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-neutral-500 pb-2 border-b border-white/5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Antigravity Interactive ZSH [Version 5.9.0-yk-darwin]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Type 'help' for instruction list" })]
							}),
							outputs.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: themeColors[themeMode],
										children: "yathin@sg-prod:~$"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-medium",
										children: item.command
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pl-4 border-l border-white/10",
									children: item.output
								})]
							}, index)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "flex items-center gap-2 text-xs pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: themeColors[themeMode],
										children: "yathin@sg-prod:~$"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: inputRef,
										type: "text",
										value: input,
										onChange: (e) => setInput(e.target.value),
										onKeyDown: handleKeyDown,
										placeholder: "type a command... (e.g. whoami, achievements, exp)",
										className: "flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 placeholder:text-neutral-600",
										autoComplete: "off",
										spellCheck: "false"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "text-neutral-500 hover:text-white transition-colors",
										title: "Execute",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CornerDownLeft, { className: "w-3.5 h-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })
						]
					})]
				})
			]
		})
	});
}
function StackSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "py-24 sm:py-32 relative bg-black/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "06 — Tech Stack & Toolbox" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["The technical ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "serif text-[#e6c79c] font-normal",
							children: "arsenal."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-neutral-400 text-sm sm:text-base mt-2",
						children: "Depth in modern JavaScript/TypeScript, build architecture, and AI-accelerated workflows."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs text-neutral-500 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Production-tested capabilities" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						{
							title: "Frontend & Architecture",
							icon: import_lucide_react.Code,
							accent: "text-[#e6c79c]",
							items: [
								{
									name: "React 19 / 18",
									level: "Expert / Architect",
									desc: "Component architecture, concurrent rendering, custom hooks"
								},
								{
									name: "TypeScript",
									level: "Expert",
									desc: "Strict typing, generic abstractions, ASTs"
								},
								{
									name: "Next.js",
									level: "Production Lead",
									desc: "App router, SSR/CSR JAMstack, server actions"
								},
								{
									name: "TanStack Start & Router",
									level: "Modern Full-Stack",
									desc: "Type-safe client/server routing & state"
								},
								{
									name: "Astro.js",
									level: "High Performance",
									desc: "Zero JS by default, island architecture"
								}
							]
						},
						{
							title: "Build Systems & Tooling",
							icon: import_lucide_react.Wrench,
							accent: "text-emerald-400",
							items: [
								{
									name: "Vite 8 & Plugins",
									level: "50% Speedup Lead",
									desc: "Plugin authoring, HMR optimization, proxy redirects"
								},
								{
									name: "Bun Runtime",
									level: "Active Tooling",
									desc: "Package management, bundler benchmarking, fast scripting"
								},
								{
									name: "Node.js",
									level: "Senior",
									desc: "Enterprise microservices, npm package authoring"
								},
								{
									name: "Webpack to Vite Migration",
									level: "Specialist",
									desc: "Legacy CRA and bundler modernization"
								},
								{
									name: "Custom NPM Libraries",
									level: "Author",
									desc: "Shared UI components, utility hooks, dev plugins"
								}
							]
						},
						{
							title: "Design Systems & Motion",
							icon: import_lucide_react.Palette,
							accent: "text-cyan-400",
							items: [
								{
									name: "Tailwind CSS v4",
									level: "V4 Migration Lead",
									desc: "Modern CSS-first configurations, theme variables"
								},
								{
									name: "IBM Carbon Components",
									level: "Enterprise",
									desc: "Carbon React design tokens and accessibility standards"
								},
								{
									name: "Ant Design",
									level: "Enterprise",
									desc: "Complex enterprise backoffice and analytics UI"
								},
								{
									name: "Framer Motion",
									level: "Interactive Polish",
									desc: "Seamless page transitions and physics-based animations"
								}
							]
						},
						{
							title: "AI & Workflow Automation",
							icon: import_lucide_react.Bot,
							accent: "text-purple-400",
							items: [
								{
									name: "Claude Code",
									level: "Agentic Workflows",
									desc: "AI-assisted development, code refactoring agents"
								},
								{
									name: "n8n Workflow Automation",
									level: "Process Engineer",
									desc: "Webhook triggers, API integrations, repetitive task elimination"
								},
								{
									name: "Custom AI Agents",
									level: "Platform Builder",
									desc: "Streamlined development processes and CI/CD triage"
								},
								{
									name: "CI/CD Pipeline Automation",
									level: "DevOps Lead",
									desc: "Automated test runners, build gates, deployment sanity"
								}
							]
						},
						{
							title: "Systems & Emerging Engineering",
							icon: import_lucide_react.Binary,
							accent: "text-amber-400",
							items: [
								{
									name: "Rust",
									level: "Exploring & Systems",
									desc: "Memory-safe systems programming, CLI tooling, WebAssembly"
								},
								{
									name: "Zsh / Unix Shell",
									level: "Power User",
									desc: "Developer scripting, terminal automation, developer envs"
								},
								{
									name: "Git & GitHub Workflows",
									level: "Advanced",
									desc: "Branching policies, multi-repo architecture, monorepos"
								}
							]
						}
					].map((cat, idx) => {
						const Icon = cat.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spot-card p-7 rounded-3xl flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-6 pb-4 border-b border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-5 h-5 ${cat.accent}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-white",
									children: cat.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: cat.items.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-sm text-neutral-200",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#e6c79c]",
											children: item.level
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-neutral-400 leading-snug",
										children: item.desc
									})]
								}, itemIdx))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-neutral-500 text-[11px] font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle2, { className: "w-3.5 h-3.5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Production verified across enterprise applications" })]
							})]
						}, idx);
					})
				})
			]
		})
	});
}
function ContactSection() {
	const [copiedEmail, setCopiedEmail] = (0, import_react.useState)(false);
	const [copiedPhone, setCopiedPhone] = (0, import_react.useState)(null);
	const [formName, setFormName] = (0, import_react.useState)("");
	const [formMsg, setFormMsg] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const copyToClipboard = (text, type) => {
		navigator.clipboard.writeText(text);
		if (type === "email") {
			setCopiedEmail(true);
			setTimeout(() => setCopiedEmail(false), 2e3);
		} else {
			setCopiedPhone(text);
			setTimeout(() => setCopiedPhone(null), 2e3);
		}
	};
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!formMsg.trim()) return;
		const subject = encodeURIComponent(`Engineering Architecture Inquiry from ${formName || "Developer"}`);
		const body = encodeURIComponent(`${formMsg}\n\nFrom: ${formName}`);
		window.open(`mailto:yathink3@gmail.com?subject=${subject}&body=${body}`, "_blank");
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 sm:py-36 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[1px] bg-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "07 — Let's Connect" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1] text-white",
							children: [
								"Have a platform to scale? ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "serif text-[#e6c79c] font-normal",
									children: "Let's engineer it."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400 text-base sm:text-lg mt-6 max-w-xl leading-relaxed",
							children: "Open to discussions around high-performance frontend architecture, AI automation agent integrations, and systems engineering leadership."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#e6c79c]/50 transition-all group shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-wider text-neutral-500 block mb-2",
								children: "Primary Direct Channel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:yathink3@gmail.com",
									className: "text-2xl sm:text-4xl font-mono font-bold text-white group-hover:text-[#e6c79c] transition-colors break-all",
									children: "yathink3@gmail.com"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => copyToClipboard("yathink3@gmail.com", "email"),
									className: "flex items-center gap-2 font-mono text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 transition-all self-start sm:self-auto",
									children: [copiedEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copiedEmail ? "Copied" : "Copy" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-neutral-500 text-xs font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Phone, { className: "w-3.5 h-3.5 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Singapore" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => copyToClipboard("+6584394761", "phone"),
										className: "hover:text-white",
										children: copiedPhone === "+6584394761" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "w-3 h-3" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+6584394761",
									className: "text-lg font-mono font-bold text-white hover:text-[#e6c79c] block transition-colors",
									children: "+65 8439 4761"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-neutral-500 text-xs font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Phone, { className: "w-3.5 h-3.5 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "India" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => copyToClipboard("+918281166822", "phone"),
										className: "hover:text-white",
										children: copiedPhone === "+918281166822" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "w-3 h-3" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918281166822",
									className: "text-lg font-mono font-bold text-white hover:text-[#e6c79c] block transition-colors",
									children: "+91 8281 166822"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://linkedin.com/in/yathink3/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedinIcon, { className: "w-4 h-4 text-[#0077b5]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LinkedIn /yathink3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-500" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/yathink3",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, { className: "w-4 h-4 text-white" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GitHub /yathink3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-500" })
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-[#090a0f] border border-white/10 p-6 sm:p-8 font-mono shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pb-4 mb-6 border-b border-white/10 text-xs text-neutral-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Terminal, { className: "w-4 h-4 text-[#e6c79c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "transmission@yathin.dev — prompt" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSendMessage,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-neutral-400 block mb-2 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-400",
										children: "$"
									}), " export SENDER_NAME=\"\""]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: formName,
									onChange: (e) => setFormName(e.target.value),
									placeholder: "e.g. Alex Mercer / Engineering Lead",
									className: "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-mono outline-none focus:border-[#e6c79c] transition-colors placeholder:text-neutral-600"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs text-neutral-400 block mb-2 font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400",
											children: "$"
										}), " cat << 'EOF' > inquiry.txt"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 5,
										value: formMsg,
										onChange: (e) => setFormMsg(e.target.value),
										placeholder: "Share your architectural challenge, project requirements, or engineering inquiry...",
										className: "w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white text-xs font-mono outline-none focus:border-[#e6c79c] transition-colors placeholder:text-neutral-600 resize-none",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-neutral-500 mt-1",
										children: "EOF"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full flex items-center justify-center gap-2 bg-[#e6c79c] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(230,199,156,0.25)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sent ? "Transmission Dispatched!" : "Transmit Message" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-neutral-500 text-center",
									children: "Direct client dispatch opens your configured mailer directly to yathink3@gmail.com"
								})
							]
						})]
					})
				})]
			})]
		})
	});
}
function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-white/[0.08] bg-[#030305] py-12 relative z-10 text-xs font-mono text-neutral-500",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row items-center justify-between gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-neutral-400",
								children: ["System Status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-400",
									children: "All Nodes Active"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uptime: 99.99%" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center text-neutral-400",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white font-bold",
								children: "Yathin K"
							}),
							" · Staff Engineer & Frontend Architect"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-neutral-600",
							children: "TanStack Start · Vite 8 · Tailwind v4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: scrollToTop,
							className: "flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to top" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUp, { className: "w-3.5 h-3.5" })]
						})]
					})
				]
			})
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-[#f2f0ea]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveTerminal, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { HomePage as component };

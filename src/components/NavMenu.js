import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, LinkBox, Box, Link, Section } from "@quarkly/widgets";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
import { FiMenu } from "react-icons/fi";
const defaultProps = {
	"sm-padding": "8px 0 8px 0",
	"quarkly-title": "Header-3",
	"background": "#454545"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "flex-start",
			"flex-direction": "row",
			"width": "30%",
			"sm-width": "50%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "flex-start",
			"md-width": "50%",
			"lg-width": "70%",
			"md-justify-content": "flex-start"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/66ba53019710450018a21837/images/FBPPTrans.png?v=2024-08-12T18:24:38.389Z",
			"display": "block",
			"width": "100px",
			"height": "100px"
		}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"menuPosition": "full",
			"breakpoint": "lg",
			"width": "70%",
			"sm-width": "50%",
			"md-width": "50%",
			"lg-width": "30%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Children",
			"md-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"lg-background": "#ffffff",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"font": "normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"sm-font": "normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "0px 2px 0px 0px",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon :closed",
			"category": "fi",
			"icon": FiMenu,
			"size": "32px",
			"padding": "5px 7px 5px 7px",
			"border-radius": "50px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon",
			"width": "28px",
			"height": "28px",
			"category": "fi",
			"icon": FiMenu,
			"color": "--dark",
			"size": "24px",
			"lg-width": "32px",
			"lg-height": "32px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Cross",
			"lg-width": "32px",
			"lg-height": "32px",
			"size": "32px",
			"top": "24px",
			"right": "24px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/index",
			"color": "#ffffff",
			"padding": "0px 0px 0px 20px",
			"text-decoration-line": "initial",
			"font": " 20px --fontFamily-googleGabarito",
			"children": "HOME"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "#",
			"color": "#ffffff",
			"padding": "0px 0px 0px 20px",
			"text-decoration-line": "initial",
			"font": "20px --fontFamily-googleGabarito",
			"children": "PRODUCTS"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "#",
			"color": "#ffffff",
			"padding": "0px 0px 0px 20px",
			"text-decoration-line": "initial",
			"font": "20px --fontFamily-googleGabarito",
			"children": "SERVICES"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "#",
			"color": "#ffffff",
			"padding": "0px 0px 0px 20px",
			"text-decoration-line": "initial",
			"font": "20px --fontFamily-googleGabarito",
			"children": "CONTACT & ABOUT US"
		}
	}
};

const NavMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Image {...override("image")} />
			</LinkBox>
		</Box>
		<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
			<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride4")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride5")} />
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
		</QuarklycommunityKitMobileSidePanel>
		{children}
	</Section>;
};

Object.assign(NavMenu, { ...Section,
	defaultProps,
	overrides
});
export default NavMenu;
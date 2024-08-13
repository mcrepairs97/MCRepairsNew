import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, LinkBox, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"products"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66ba53019710450018a21837/images/FBPPTrans.png?v=2024-08-12T18:24:38.389Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.NavMenu background="#888888">
			<Override slot="link1" href="/products" />
			<Override slot="link2" href="/services" />
			<Override slot="link3" href="/contact-and-about-us" />
		</Components.NavMenu>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			box-sizing="content-box"
			align-items="center"
			justify-content="center"
			flex-wrap="no-wrap"
		>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="row"
			>
				<Link
					href="#"
					color="#000000"
					text-align="center"
					font="bold 24px --fontFamily-googleGabarito"
					text-decoration-line="underline line-through"
				>
					UPGRADE KITS
				</Link>
			</Box>
			<Box min-width="100px" min-height="100px" />
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Link href="#preowned" color="#000000" text-align="center" font="bold 24px --fontFamily-googleGabarito">
					PREOWNED PC'S
				</Link>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" height="800px">
			<Components.QuarklycommunityKitCarousel slidesProp="2" height="800px">
				<Override slot="Slide Image" height="800px" />
				<Override slot="Slide" height="800px" />
			</Components.QuarklycommunityKitCarousel>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Box min-width="100px" min-height="100px" width="100%" id="preowned">
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12:18:27.236Z"
				display="block"
				width="100%"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12%3A18%3A27.236Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
		>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
				padding="0px 150px 0px 0px"
			>
				<LinkBox>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11:50:04.467Z"
						display="block"
						width="500px"
						height="500px"
						border-width="10px"
						border-style="solid"
						border-radius="50px"
						overflow="visible"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</LinkBox>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Image
					src="https://uploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11:57:04.979Z"
					display="block"
					width="75px"
					srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/bar.jpg?v=2024-08-13T11%3A57%3A04.979Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
				padding="0px 0px 0px 150px"
			>
				<LinkBox>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11:49:52.656Z"
						display="block"
						width="500px"
						border-radius="50px"
						border-width="10px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</LinkBox>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Section md-padding="60px 0 30px 0" quarkly-title="Footer-15" padding="90px 0 30px 0" background="#575757">
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 50px 0px"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 34px"
				lg-grid-template-columns="repeat(3, 1fr)"
				lg-flex-wrap="wrap"
			>
				<Box
					min-width="100px"
					min-height="100px"
					margin="0px 0 0px 0px"
					width="25%"
					padding="0px 0 0px 0px"
					lg-width="30%"
					md-width="45%"
					sm-width="100%"
				>
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						Phone
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						+987 (765) 432 12 23
					</Link>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						E-mail
					</Text>
					<Link
						href="mailto:info@yourdomain.com"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						info@yourdomain.com
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					margin="0px 0 0px 0px"
					width="25%"
					lg-width="30%"
					md-width="45%"
					sm-width="100%"
				>
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						ADDRESS
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						4998 Hanover Street,{" "}
						<br />
						New York, 10011
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="block"
						margin="0px 0px 15px 0px"
					>
						Mon to Fri (10 am – 6 pm)
						<br />
						Sat (12 am – 6 pm){" "}
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					margin="0px 0 0px 0"
					width="25%"
					lg-width="30%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						SOCIAL MEDIA
					</Text>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						margin="0px 0px 5px 0px"
						display="inline-block"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						hover-color="--primary"
					>
						Instagram
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						margin="0px 0px 5px 0px"
						display="inline-block"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						hover-color="--primary"
					>
						Facebook
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						margin="0px 0px 5px 0px"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						hover-color="--primary"
					>
						Twitter
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				align-items="center"
				justify-content="space-between"
				md-align-items="flex-start"
				md-flex-direction="column"
			>
				<Text
					font="--base"
					color="#ffffff"
					md-margin="0px 0px 0 0px"
					width="30%"
					md-width="100%"
					margin="0 0px 0 0px"
				>
					© 2023 Company, Inc.{" "}
				</Text>
				<Box
					align-items="flex-start"
					margin="0px 0px 0px -"
					justify-content="flex-start"
					display="grid"
					lg-margin="0px 0px 0px 0px"
					flex-direction="row"
					flex-wrap="wrap"
					md-margin="0px 0px 25px 0px"
					sm-flex-direction="column"
					md-order="-1"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="0 34px"
				>
					<Link
						margin="0px 0 0px 0"
						lg-margin="0px 6px 0px 0px"
						display="flex"
						href="#"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						text-decoration-line="initial"
						color="#ffffff"
						hover-color="--primary"
						sm-padding="0 0 15px 0"
					>
						Privacy Policy
					</Link>
					<Link
						padding="0 0 0 0"
						margin="0px 0 0px 0"
						hover-color="--primary"
						lg-margin="0px 6px 0px 0px"
						href="#"
						text-decoration-line="initial"
						color="#ffffff"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						display="flex"
					>
						Terms
					</Link>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66ba53019710450018a21835"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
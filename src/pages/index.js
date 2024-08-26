import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Button, Image, Hr, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66ba53019710450018a21837/images/FBPPTrans.png?v=2024-08-12T18:24:38.389Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.NavMenu background="#888888" height="130px">
			<Override slot="link" href="/index">
				HOME
			</Override>
			<Override slot="link1" href="/products" />
			<Override slot="link2" href="/services" />
			<Override slot="link3" href="/contact-and-about-us" />
			<Override slot="linkBox" align-self="center" />
			<Override slot="quarklycommunityKitMobileSidePanelOverride5" lg-color="#ffffff" />
			<Override
				slot="quarklycommunityKitMobileSidePanelOverride"
				lg-padding="60px 0px 0px 0px"
				lg-align-items="center"
				lg-display="flex"
				lg-flex-direction="row"
				lg-justify-content="center"
			/>
			<Override slot="quarklycommunityKitMobileSidePanelOverride1" lg-background="#888888" lg-height="130px" />
		</Components.NavMenu>
		<Box min-width="100px" min-height="100px" />
		<Box
			min-width="100px"
			min-height="100px"
			lg-align-items="center"
			lg-display="flex"
			lg-flex-direction="row"
			lg-justify-content="center"
		>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-items="center"
				flex-direction="row"
				justify-content="center"
				overflow="hidden"
			>
				<Box
					min-width="100px"
					min-height="100px"
					order="0"
					align-self="auto"
					display="block"
					text-align="center"
					lg-margin="0px 0px 0px 50px"
				>
					<Text margin="0px 0px 0px 0px" font="50px --fontFamily-googleGabarito" lg-font="36px --fontFamily-googleGabarito">
						Due for service?
					</Text>
					<Text margin="0px 0px 0px 0px" font="24px --fontFamily-googleGabarito" lg-font="18px --fontFamily-googleGabarito">
						Call to book an appointment.
					</Text>
					<Button
						type="link"
						margin="20px 0px 0px 0px"
						border-width="2px"
						border-color="#000000"
						border-style="solid"
						border-radius="15px 10px 20px 5px"
						background="#1e8a24"
						font="normal bold 16px/1.5 --fontFamily-googleGabarito"
						text-decoration-line="initial"
						href="/contact-and-about-us"
					>
						CONTACT US
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					lg-align-items="center"
					lg-display="flex"
					lg-flex-direction="row"
					lg-justify-content="center"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12:28:26.410Z"
						display="block"
						height="650px"
						lg-width="80%"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Box min-width="100px" min-height="100px" background="#000000" padding="40px 0px 0 0px">
			<Text
				margin="0px 0px 0px 0px"
				text-align="center"
				display="block"
				font="bold 70px --fontFamily-googleGabarito"
				color="#ffffff"
				text-decoration-line="underline"
			>
				Reason to choose our service
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			background="#000000"
			padding="125px 0px 125px 0px"
		>
			<Box min-width="100px" min-height="100px" width="50%">
				<Text
					margin="0px 0px 0px 0px"
					font="normal 900 72px/1.2 --fontFamily-googleGabarito"
					padding="0 0 0 200px"
					text-align="left"
					color="#ffffff"
					lg-font="normal 900 38px/1 --fontFamily-googleGabarito"
					lg-text-align="left"
				>
					Quality Service
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					padding="0 0 0 200px"
					font="24px --fontFamily-googleGabarito"
					color="#ffffff"
					lg-font="18px --fontFamily-googleGabarito"
				>
					Our production IT company specializes in providing cutting-edge technology solutions to businesses of{" "}
					<br />
					all sizes. We offer a wide range of services, including in depth tech repair, network management
					<br />
					{" "}and IT consulting.
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" width="50% ">
				<Image
					src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					display="block"
					width="100%"
					height="300px"
					object-fit="contain"
					padding="0px 200px 0px 200px"
					lg-min-width="none"
					lg-min-height="none"
					lg-padding="0px 0 0px 0"
					srcSet="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			background="#000000"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			border-width={0}
		>
			<Hr
				min-height="10px"
				margin="0px 0px 0px 0px"
				background="#ffffff"
				width="1200px"
				align-self="auto"
				display="block"
				border-radius="50px"
				lg-width="80%"
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			justify-content="center"
			flex-direction="row"
			background="#000000"
			padding="125px 0px 125px 0px"
		>
			<Box min-width="100px" min-height="100px" width="50%">
				<Image
					src="https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					display="block"
					width="100%"
					height="300px"
					object-fit="cover"
					padding="0px 200px 0px 200px"
					border-width="2px"
					border-style="solid"
					border-color="rgba(255, 255, 255, 0)"
					lg-padding="0px 20px 0px 20px"
					lg-min-width="none"
					lg-min-height="none"
					srcSet="https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1584722065451-922e4d176e53?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box min-width="100px" min-height="100px" width="50% ">
				<Text
					margin="0px 0px 0px 0px"
					font="900 72px --fontFamily-googleGabarito"
					text-align="left"
					padding="0px 200px 0px 0px"
					color="#ffffff"
					lg-font="900 38px --fontFamily-googleGabarito"
				>
					Relaible Support
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					text-align="left"
					font="24px --fontFamily-googleGabarito"
					padding="px 200px 0px 0px"
					color="#ffffff"
					lg-font="18px --fontFamily-googleGabarito"
				>
					At our company, we believe in using the latest{" "}
					<br />
					technology to help businesses streamline their{" "}
					<br />
					operations and achieve their goals. We work closely{" "}
					<br />
					with our clients to understand their needs and go{" "}
					<br />
					above and beyond to develop customized solutions{" "}
					<br />
					that are tailored to their specific requirements.
				</Text>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Section
			padding="0 0 30px 0"
			md-padding="60px 0 30px 0"
			quarkly-title="Footer-15"
			font="50px sans-serif"
			background="#292929"
		>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="24px --fontFamily-googleGabarito">
					Please note we are not a walk in store.
					<br />
					{"\n\n"}
				</Text>
			</Box>
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px" color="#ffffff">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 600 16px/1.5 --fontFamily-googleGabarito" color="#ffffff">
						Phone
					</Text>
					<Link
						href="tel:+27783488838"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						+2778 348 8834
						<br />
						{"\n\n"}
					</Link>
					<Text margin="0px 0px 5px 0px" font="normal bold 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						E-mail
					</Text>
					<Link
						href="mailto:m.computerrepairs.kzn@gmail.com"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						m.computerrepairs.kzn@gmail.com
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px" color="#ffffff">
						ADDRESS
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						26 Ivernia Road, Bluff
						<br />
						Durban, KZN
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						9 AM to 5 PM - Monday{"\n\n"}
						<br />
						9 AM to 5 PM - Tuesday{"\n"}
						<br />
						9 AM to 5 PM - Wednesday{"\n"}
						<br />
						9 AM to 5 PM - Thursday
						<br />
						{"\n\n"}9 AM to 5 PM - Friday
						<br />
						{"\n\n"}9 AM to 3 PM - Saturday{"\n"}
						<br />
						{" "}Closed - Sunday{"\n\n\n\n"}
					</Text>
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px" color="#ffffff">
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
					Copyright @ 2024 Martin's Computer Repairs
				</Text>
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
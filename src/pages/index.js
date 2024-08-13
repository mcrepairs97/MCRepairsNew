import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Button, Image, Section } from "@quarkly/widgets";
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
		<Components.NavMenu>
			<Override slot="link" href="/index">
				HOME
			</Override>
			<Override slot="link1" href="/products" />
			<Override slot="link2" href="/services" />
			<Override slot="link3" href="/contact-and-about-us" />
		</Components.NavMenu>
		<Box min-width="100px" min-height="100px" />
		<Box min-width="100px" min-height="100px">
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
				>
					<Text margin="0px 0px 0px 0px" font="50px sans-serif">
						Due for service?
					</Text>
					<Text margin="0px 0px 0px 0px" font="24px sans-serif">
						Call to book an appointment.
					</Text>
					<Button
						type="link"
						margin="20px 0px 0px 0px"
						border-width="3px"
						border-color="#000000"
						border-style="solid"
						border-radius="15px 10px 20px 5px"
						background="#1e8a24"
						font="normal bold 16px/1.5 --fontFamily-googleGabarito"
						text-decoration-line="initial"
						href="/contact-and-about-us"
					>
						CALL NOW
					</Button>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12:28:26.410Z"
						display="block"
						height="650px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Acer-Swift-3X_SF314-510G_Gold_modelmain.png?v=2024-08-13T12%3A28%3A26.410Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Box min-width="100px" min-height="100px">
			<Text margin="0px 0px 0px 0px" text-align="center" display="block" font="bold 70px --fontFamily-googleGabarito">
				Reason to choose our service
			</Text>
		</Box>
		<Box min-width="100px" min-height="100px" />
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
				>
					Quality Service
				</Text>
				<Text margin="0px 0px 0px 0px" padding="0 0 0 200px" font="24px --fontFamily-googleGabarito" color="#ffffff">
					Our production IT company specializes in providing
					<br />
					cutting-edge technology solutions to businesses of{" "}
					<br />
					all sizes. We offer a wide range of services,{" "}
					<br />
					including in depth tech repair, network management
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
					object-fit="cover"
					padding="0px 200px 0px 200px"
					srcSet="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" background="#000000" />
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
				>
					Relaible Support
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					text-align="left"
					font="24px --fontFamily-googleGabarito"
					padding="px 200px 0px 0px"
					color="#ffffff"
				>
					At our company, we believe in using the latest technology to help
					<br />
					businesses streamline their operations and achieve their goals. We
					<br />
					work closely with our clients to understand their needs and go{" "}
					<br />
					above and beyond to develop customized solutions that are{" "}
					<br />
					tailored to their specific requirements.
				</Text>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Section
			padding="90px 0 30px 0"
			md-padding="60px 0 30px 0"
			quarkly-title="Footer-15"
			font="50px sans-serif"
			background="#ffffff"
		>
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 600 16px/1.5 --fontFamily-googleGabarito" color="#5a5d64">
						Phone
					</Text>
					<Link
						href="tel:+27783488838"
						color="#5a5d64"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						+27 78 348 8838
					</Link>
					<Text margin="0px 0px 5px 0px" font="normal bold 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64">
						E-mail
					</Text>
					<Link
						href="mailto:m.computerrepairs.kzn@gmail.com"
						color="#5a5d64"
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px">
						ADDRESS
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64">
						South Suburbs, Bluff
						<br />
						Durban, KZN
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#5a5d64"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="block"
						margin="0px 0px 15px 0px"
					>
						Monday - 9 AM to 5 PM
						<br />
						{"\n\n"}Tuesday - 9 AM to 5 PM
						<br />
						{"\n"}Wednesday - 9 AM to 5 PM
						<br />
						{"\n"}Thursday - 9 AM to 5 PM
						<br />
						{"\n\n"}Friday - 9 AM to 5 PM
						<br />
						{"\n\n"}Saturday - 9 AM to 3 PM
						<br />
						{"\n"}Sunday - Closed
						<br />
						{"\n\n"}
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
					<Text margin="0px 0px 20px 0px" font="normal bold 18px/1.5 --fontFamily-googleGabarito" letter-spacing="1px">
						SOCIAL MEDIA
					</Text>
					<Link
						href="#"
						color="#5a5d64"
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
						color="#5a5d64"
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
						color="#5a5d64"
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
					color="#000000"
					md-margin="0px 0px 0 0px"
					width="30%"
					md-width="100%"
					margin="0 0px 0 0px"
				>
					Copyright @ 2024 Martin's Computer Repairs
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
						color="#5a5d64"
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
						color="#5a5d64"
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
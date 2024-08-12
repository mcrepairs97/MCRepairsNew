import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Section } from "@quarkly/widgets";
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
		<Components.NavMenu />
		<Box
			display="flex"
			width="100%"
			justify-content="center"
			lg-width="100%"
			align-items="center"
			lg-margin="0px 0px 32px 0px"
			margin="0px 0px 0px 0px"
			padding="0px 0 0px 0px"
			lg-padding="0px 0px 0px 0px"
			lg-justify-content="center"
			flex-direction="row"
			flex-wrap="no-wrap"
			align-content="center"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22:06:28.856Z"
				width="100%"
				height="100%"
				border-radius={0}
				transform="translateY(0px)"
				transition="transform 0.2s ease-in-out 0s"
				hover-transform="translateY(-10px)"
				min-height="auto"
				max-width="100%"
				sm-min-height="100vw"
				overflow="visible"
				max-height="100%"
				flex="0 1 auto"
				align-self="auto"
				display="inline-block"
				order="0"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/6cmtT7vzcC8LTckeyQA3gM.jpg?v=2024-08-12T22%3A06%3A28.856Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Section padding="80px 0 80px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" text-align="center" font="--lead">
					Sign up with your email address to receive news and updates.
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Sam
								<br />
								Smith
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								PM
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 15px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Mason
								<br />
								Johnson
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Writer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Adriana
								<br />
								Williams
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								PO
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Ethan
								<br />
								Tremblay
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								UI/UX Designer
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 30px 0" md-padding="60px 0 30px 0" quarkly-title="Footer-15">
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
					width="25%"
					padding="0px 50px 0px 0"
					md-width="90%"
					sm-margin="40px 0px 0px 0"
					sm-width="100%"
					sm-padding="0px 0px 0px 0"
					margin="0px 0 0px 0px"
					lg-width="100%"
					lg-padding="0px 0 0px 0"
				>
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px">
						ABOUT US
					</Text>
					<Text margin="0px 0px 0 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64" lg-max-width="640px">
						It is the best way to improve your professional skills and become more valued
					</Text>
				</Box>
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64">
						Phone
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#5a5d64"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="inline-block"
						margin="0px 0px 15px 0px"
						hover-color="--primary"
					>
						+987 (765) 432 12 23
					</Link>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64">
						E-mail
					</Text>
					<Link
						href="mailto:info@yourdomain.com"
						color="#5a5d64"
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px">
						ADDRESS
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#5a5d64">
						4998 Hanover Street,{" "}
						<br />
						New York, 10011
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#5a5d64"
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px">
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
					color="#5a5d64"
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
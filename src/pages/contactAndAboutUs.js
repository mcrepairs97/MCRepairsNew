import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Hr, Section, Image, LinkBox, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact-and-about-us"} />
		<Helmet>
			<title>
				Contact & About us
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66ba53019710450018a21837/images/FBPPTrans.png?v=2024-08-12T18:24:38.389Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.NavMenu lazy-load={false} background="#888888" position="static" height="130px">
			<Override slot="link3" href="/contact-and-about-us" />
			<Override slot="link2" href="/services" />
			<Override slot="link1" href="/products" />
			<Override slot="linkBox" align-self="center" />
		</Components.NavMenu>
		<Box min-width="100px" min-height="100px" />
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
		>
			<Section
				background="url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
				padding="140px 0"
				sm-padding="40px 0"
				quarkly-title="About-16"
				inner-min-width="80%"
				width="80%"
				border-radius="50px"
			>
				<Override slot="SectionContent" align-items="center" justify-content="center" sm-min-width="280px" />
				<Box
					padding="50px 80px 50px 50px"
					color="--dark"
					display="flex"
					flex-direction="column"
					align-items="center"
					max-width="670px"
					background="#ffffff"
					sm-padding="50px 24px 50px 24px"
					border-radius="25px"
				>
					<Text margin="0 0 16px 0" as="h2" font="--headline2">
						About us
					</Text>
					<Hr
						min-height="10px"
						margin="0px 0px 0px 0px"
						border-color="--color-dark"
						border-width="3px 0 0 0"
						max-width="50px"
						width="100%"
					/>
					<Text font="--base" text-align="center">
						As an IT company we look at making our environment easily accessible and a convenient place for everyone looking to be part of the technological side of life.
						<br />
						We don't want to be seen as competitors but rather as a helping hand in a sense of being able to meet our clients specific needs to the point, doing more than what your "normal" IT shop would do, exceeding expectations of not just others but of ourselves too.
					</Text>
				</Box>
			</Section>
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
			<Text margin="0px 0px 0px 0px" font="bold 28px --fontFamily-googleGabarito" text-decoration-line="underline">
				Want to leave a review?
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			justify-content="center"
			flex-direction="row"
			margin="0px 0px 0 0px"
			padding="0px 0px 30px 0px"
		>
			<Box min-width="100px" min-height="100px" width="50%">
				<LinkBox href="https://www.facebook.com/MCOMPUTERREPAIRS/reviews">
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09:37:37.011Z"
						display="block"
						width="300px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.png?v=2024-08-17T09%3A37%3A37.011Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</LinkBox>
			</Box>
			<Box min-width="100px" min-height="100px" width="50%">
				<LinkBox href="https://g.page/r/CUuQwluZMsyQEAI/review">
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09:34:32.239Z"
						display="block"
						width="300px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/1699349664215.jpeg?v=2024-08-17T09%3A34%3A32.239Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</LinkBox>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
		>
			<Hr
				min-height="10px"
				min-width={0}
				margin="0px 0px 0px 0px"
				width="1500px"
				background="#000000"
				border-radius="50px"
			/>
		</Box>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
			quarkly-title="Form-1"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							padding="0 0 0 64px"
						>
							<Icon
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
								position="absolute"
							/>
							<Text as="h4" margin="6px 0" font="--base">
								Visit us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								26 Ivernia Road, Bluff
								<br />
								Durban, KZN
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:m.computerrepairs.kzn@gmail.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									m.computerrepairs.kzn@gmail.com
								</Link>
							</Text>
						</Box>
						<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
							<Icon
								left="0"
								category="md"
								icon={MdPhone}
								position="absolute"
								size="48px"
								top="0"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								+2778 348 8838
							</Text>
						</Box>
						<Box
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
							padding="0 0 0 64px"
						>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									category="fa"
									icon={FaFacebookF}
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									background="--color-primary"
									border-radius="50%"
									category="fa"
									icon={FaTwitter}
									width="48px"
									height="48px"
									size="24px"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									category="fa"
									icon={FaLinkedinIn}
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="0 0 30px 0" md-padding="60px 0 30px 0" quarkly-title="Footer-15" background="#292929">
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="26px --fontFamily-googleGabarito">
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
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
					</Link>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						ADDRESS
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						26 Ivernia Road, Bluff
						<br />
						Durban, KZN{"\n\n"}
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
					Copyright @ 2024 Martin's Computer Repairs{"\n\n"}
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

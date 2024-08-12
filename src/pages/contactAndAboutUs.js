import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Icon, Section, LinkBox, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdSignalCellular4Bar, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact-and-about-us"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66ba53019710450018a21837/images/FBPPTrans.png?v=2024-08-12T18:24:38.389Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.NavMenu />
		<Section padding="80px 0 80px 0" background="#ffffff" md-padding="40px 0 40px 0" quarkly-title="About-9">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-min-width="280px" />
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 48px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 48px 24px 24px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 40px 0px"
				md-align-items="flex-start"
				md-padding="24px 0px 24px 0px"
			>
				<Text margin="0px 0px 24px 0px" color="--dark" font="--base" lg-text-align="center">
					OUR TEAM
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="--dark"
					font="--headline2"
					lg-text-align="center"
					md-text-align="left"
				>
					Mauris rhoncus orci in
imperdiet placerat
				</Text>
				<Box
					display="flex"
					flex-direction="column"
					margin="0px 0px 24px 0px"
					grid-gap="16px"
					lg-flex-direction="row"
					lg-display="flex"
					lg-grid-gap="24px"
					sm-flex-direction="column"
					sm-display="flex"
					sm-grid-gap="12px"
				>
					<Text
						color="--dark"
						font="--base"
						lg-text-align="left"
						lg-margin="0px 0px 0px 0px"
						display="flex"
						margin="0px 0px 0px 0px"
					>
						Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitse molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien.
					</Text>
					<Text
						color="--dark"
						font="--base"
						lg-text-align="left"
						lg-margin="0px 0px 0px 0px"
						display="flex"
						margin="0px 0px 0px 0px"
					>
						In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.
					</Text>
				</Box>
				<Link
					href="#"
					color="--lightD1"
					text-decoration-line="initial"
					padding="9px 24px 10px 24px"
					background="--color-red"
					font="--base"
					transition="--opacityOut"
					hover-opacity=".7"
					text-transform="uppercase"
					border-radius="6px"
					letter-spacing="0.5px"
				>
					OUR TEAM
				</Link>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-gap="16px"
				sm-grid-gap="16px"
				width="60%"
				lg-width="100%"
			>
				<Image
					src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					border-radius="24px"
					object-fit="cover"
					width="100%"
					srcSet="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					border-radius="24px"
					object-fit="cover"
					width="100%"
					margin="60px 0px 0px 0px"
					srcSet="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					grid-column="1 / 3"
					display="flex"
					margin="20px 0px 0px 0px"
					flex-direction="column"
					lg-margin="0px 0px 0px 0px"
				>
					<Icon
						category="md"
						icon={MdSignalCellular4Bar}
						size="24px"
						margin="0px 0px -2px 20px"
						color="--color-darkL1"
					/>
					<Box background="--color-darkL1" padding="24px 32px 24px 32px" max-width="400px" border-radius="6px">
						<Text margin="0px 0px 8px 0px" color="--light" font="--headline3" lg-text-align="left">
							We are hiring!
						</Text>
						<Text margin="0px 0px 0px 0px" color="--lightD1" font="--base" lg-text-align="left">
							Mauris maximus velit commodo varius{" "}
						</Text>
						<Link
							href="mailto:noreply@company.co"
							text-decoration-line="initial"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							noreply@company.co
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
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
								4998 Hanover Street, New York, 10011
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
								<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									hello@company.com
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
								+1 (234) 567-89-00
								<br />
								+1 (234) 567-89-00
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
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							max-width="360px"
						>
							<Text as="h3" font="--headline3" margin="0 0 20px 0">
								Leave us message
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Message
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-dark">
												Send
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
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
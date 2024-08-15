import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"services"} />
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
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			overflow-x="visible"
		>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
				hover-background="#ffffff"
			>
				<Link
					href="#repairs"
					color="#000000"
					font="bold 24px --fontFamily-googleGabarito"
					background="#24e21a"
					padding="10px 10px 10px 10px"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
				>
					REPAIRS
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
				<Link
					href="#services"
					color="#000000"
					font="bold 24px --fontFamily-googleGabarito"
					padding="10px 10px 10px 10px"
					border-style="solid"
					border-width="2px"
					background="#24e21a"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
				>
					SERVICES
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
				<Link
					href="#networking"
					color="#000000"
					font="bold 24px --fontFamily-googleGabarito"
					background="#24e21a"
					padding="10px 10px 10px 10px"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
				>
					NETWORKING
				</Link>
			</Box>
		</Box>
		<Box min-width="100px" min-height="100px" id="repairs" />
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="block"
			flex-direction="row"
			justify-content="center"
			text-align="center"
		>
			<Text margin="0px 0px 0px 0px" font="bold 38px --fontFamily-googleGabarito" text-align="center">
				LAPTOP
				<br />
				REPAIRS & SOLUTIONS
			</Text>
			<Text margin="0px 0px 0px 0px" font="24px --fontFamily-googleGabarito">
				Specializing in repairing of laptop moduls shown below
			</Text>
		</Box>
		<Section padding="40px 0 40px 0" quarkly-title="Product-1">
			<Override slot="SectionContent" align-items="center" />
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					border-radius={0}
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09:32:08.259Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						border-radius="250px"
						border-width="5px"
						border-style="solid"
						width="500px"
						height="400px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/42T0790.jpg?v=2024-08-13T09%3A32%3A08.259Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					border-width="5px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09:32:13.654Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						border-radius="250px"
						border-width="5px"
						border-style="solid"
						width="500px"
						height="400px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/61d335zIyJL.jpg?v=2024-08-13T09%3A32%3A13.654Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09:32:13.646Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						border-style="solid"
						border-width="5px"
						border-radius="250px"
						width="500px"
						height="400px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/083FHX.jpg?v=2024-08-13T09%3A32%3A13.646Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Box min-width="100px" min-height="100px" id="services" />
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="center"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="30px"
				md-grid-template-columns="1fr"
			>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="3px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21:36:30.306Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="cover"
						border-style="solid"
						border-width="3px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/password-reset-software.png?v=2024-08-15T21%3A36%3A30.306Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="normal 500 28px/1.2 --fontFamily-googleGabarito">
							Password Removal
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 175
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Removal of passwords linked
							<br />
							to local windows accounts.
							<br />
						</Text>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="3px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					position="relative"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21:42:25.381Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
						height="278px"
						border-width="3px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/website-virus-checker.png?v=2024-08-15T21%3A42%3A25.381Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="normal 500 28px/1.2 --fontFamily-googleGabarito">
							Virus check & Removal
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 200
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Scan your system for any infected files that can cause the system to act slow or suspicious.
						</Text>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="3px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21:47:57.549Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="contain"
						width="100%"
						height="278px"
						border-width="3px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/2345643.png?v=2024-08-15T21%3A47%3A57.549Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="normal 500 28px/1.2 --fontFamily-googleGabarito">
							Email Configuration
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 250
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Configurate your email accounts on your system.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10:58:07.030Z"
				display="block"
				width="75%"
				border-width="5px"
				border-style="solid"
				box-shadow="10px 10px 0 0 rgba(97, 97, 97, 0.52)"
				border-radius="15px"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/NewPricelist2024.png?v=2024-08-15T10%3A58%3A07.030Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Box min-width="100px" min-height="100px" id="networking" />
		<Section padding="90px 0 30px 0" md-padding="60px 0 30px 0" quarkly-title="Footer-15" background="#292929">
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
						+2778 348 8834
						<br />
						{"\n\n"}
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
					<Link
						href="tel:+9877654321223"
						color="#ffffff"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sansTrebuchet"
						display="block"
						margin="0px 0px 15px 0px"
					>
						9 AM to 5 PM - Monday
						<br />
						{"\n\n"}9 AM to 5 PM - Tuesday
						<br />
						{"\n"}9 AM to 5 PM - Wednesday
						<br />
						{"\n"}9 AM to 5 PM - Thursday
						<br />
						{"\n\n"}9 AM to 5 PM - Friday
						<br />
						{"\n\n"}9 AM to 3 PM - Saturday
						<br />
						{"\n "}Closed - Sunday
						<br />
						{"\n\n\n\n"}
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
import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Text, Hr, Section, Strong } from "@quarkly/widgets";
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
		<Components.NavMenu background="#888888" position="static" top={0} height="130px">
			<Override slot="link1" href="/products" />
			<Override slot="link2" href="/services" />
			<Override slot="link3" href="/contact-and-about-us" />
			<Override slot="linkBox" align-self="center" />
		</Components.NavMenu>
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			overflow-x="visible"
			position="sticky"
			right={0}
			left={0}
			background="#bebebe"
			top={0}
			z-index="1"
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
					color="#ffffff"
					font="bold 24px --fontFamily-googleGabarito"
					background="green"
					padding="10px 10px 10px 10px"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
					border-color="#000000"
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
					color="#ffffff"
					font="bold 24px --fontFamily-googleGabarito"
					padding="10px 10px 10px 10px"
					border-style="solid"
					border-width="2px"
					background="green"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
					border-color="#000000"
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
					color="#ffffff"
					font="bold 24px --fontFamily-googleGabarito"
					background="green"
					padding="10px 10px 10px 10px"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
					text-decoration-line="initial"
					active-background="#888888"
					active-color="#ffffff"
					border-color="#000000"
				>
					NETWORKING
				</Link>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			id="repairs"
			align-items="center"
			display="flex"
			flex-direction="row"
			box-sizing="border-box"
			position="static"
		/>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			flex-direction="row"
			justify-content="center"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08:23:03.563Z"
				display="block"
				width="150px"
				margin="0px 50px 0px 0px"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/green-light-bulb-energy-icon-hi.png?v=2024-08-19T08%3A23%3A03.563Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Text margin="0px 0px 0px 0px" font="48px --fontFamily-googleGabarito">
				CUSTOM IT SOLUTIONS
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			width="800px"
			box-sizing="border-box"
			align-items="center"
			justify-content="center"
			margin="30px 0px 0px 550px"
		>
			<Text margin="0px 0px 0px 0px" text-align="center" font="24px --fontFamily-googleGabarito">
				Our custom IT solutions are tailored technology systems and services designed specifically to meet the unique needs and requirements of a business or organization. Unlike off-the-shelf software, these solutions are developed or adapted to address particular operational challenges, integrate seamlessly with existing processes, and enhance efficiency. Custom IT solutions can include bespoke software applications, specialized hardware configurations, or unique configurations of existing technology, and they aim to provide a more precise fit and competitive advantage for the organization.
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			align-items="center"
			justify-content="center"
		>
			<Hr
				min-height="10px"
				min-width={0}
				margin="50px 0px 50px 0"
				background="#000000"
				width="1200px"
				overflow="visible"
				display="flex"
				border-radius="50px"
				align-items="center"
				justify-content="center"
				flex-direction="row"
				align-content="center"
			/>
		</Box>
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
			<Text margin="5px 0px 50px 0px" font="24px --fontFamily-googleGabarito">
				We offer repairs to laptop modules shown below
				<br />
				not limiting ourselves or clients to what is possible
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
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			align-items="center"
			justify-content="center"
			id="services"
		>
			<Hr
				min-height="10px"
				min-width={0}
				margin="50px 0px 50px 0"
				background="#000000"
				width="1200px"
				overflow="visible"
				display="flex"
				border-radius="50px"
				align-items="center"
				justify-content="center"
				flex-direction="row"
				align-content="center"
			/>
		</Box>
		<Section padding="20px 0 20px 0">
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
					border-color="#bababa"
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
					border-color="#bababa"
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
					border-color="#bababa"
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
		<Section padding="20px 0 20px 0">
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
					border-color="#bababa"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08:07:32.460Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="cover"
						border-style="solid"
						border-width="3px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/printer.jpg?v=2024-08-17T08%3A07%3A32.460Z&quality=85&w=3200 3200w"
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
							Printer Configuration
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 250
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
					border-color="#bababa"
					justify-content="center"
					position="relative"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08:15:46.059Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="scale-down"
						width="100%"
						height="278px"
						border-width="3px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Backup.jpg?v=2024-08-17T08%3A15%3A46.059Z&quality=85&w=3200 3200w"
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
							Data Backup & Restore
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 250
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
					border-color="#bababa"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08:15:34.945Z"
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
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/clone-drive.png?v=2024-08-17T08%3A15%3A34.945Z&quality=85&w=3200 3200w"
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
							SSD/HDD Cloning
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 300
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Configurate your email accounts on your system.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="20px 0 20px 0">
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
					border-color="#bababa"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08:14:53.626Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="scale-down"
						border-style="solid"
						border-width="3px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/router-icon-free-vector.jpg?v=2024-08-17T08%3A14%3A53.626Z&quality=85&w=3200 3200w"
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
							Network Configuration
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 250 p/d
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Setup your Wifiaccording to your specifications,
							<br />
							having no connectivity issues.
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
					border-color="#bababa"
					justify-content="center"
					position="relative"
					height="624px"
				>
					<Image
						src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
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
						srcSet="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
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
							Remote Desktop Assist
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 200 p/h
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Have an issue but cant come to the IT tech?
							<br />
							We can access your device remotly and help.
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
					border-color="#bababa"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08:10:10.053Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="fill"
						width="100%"
						height="278px"
						border-width="3px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pImg_WindowsUpdate.jpg?v=2024-08-17T08%3A10%3A10.053Z&quality=85&w=3200 3200w"
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
							Windows Repair/Update
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 300
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Need to repair your Windows OS or does your OS need some updating?
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="20px 0 20px 0">
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
					border-color="#bababa"
					justify-content="center"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08:11:57.419Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="scale-down"
						border-style="solid"
						border-width="3px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Windows_logo_-_2012.png?v=2024-08-17T08%3A11%3A57.419Z&quality=85&w=3200 3200w"
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
							Windows Re-Installtion
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 375
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							A clean copy of Windows to install  on your device.
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
					border-color="#bababa"
					justify-content="center"
					position="relative"
					height="624px"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08:13:33.216Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="scale-down"
						width="100%"
						height="278px"
						border-width="3px"
						border-style="solid"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-report-vector-png-image_5693095.png?v=2024-08-17T08%3A13%3A33.216Z&quality=85&w=3200 3200w"
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
							Insurance Report
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 350
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Do you need an insurance report for a system that go damaged but is insured?
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			align-items="center"
			justify-content="center"
			id="networking"
		>
			<Hr
				min-height="10px"
				min-width={0}
				margin="50px 0px 50px 0"
				background="#000000"
				width="1200px"
				overflow="visible"
				display="flex"
				border-radius="50px"
				align-items="center"
				justify-content="center"
				flex-direction="row"
				align-content="center"
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			justify-content="center"
			flex-direction="row"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09:01:00.203Z"
				display="block"
				width="150px"
				margin="0px 50px 0px 0px"
				disableOptimization={false}
				object-fit="fill"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/abstract-circuit-board-technology-icon-web-site-design-logo-app-computer-network-internet-communication-tech-icon-free-vector.png?v=2024-08-19T09%3A01%3A00.203Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Text margin="0px 0px 0px 0px" font="48px --fontFamily-googleGabarito">
				NETWORKING
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			id="networking"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
		>
			<Text margin="0px 0px 0px 0px" font="24px --fontFamily-googleGabarito" text-align="center">
				<br />
				<br />
				The networking services we offer encompass a range of essential functions that support{" "}
				<br />
				communication, management, and security in a networked environment. These services include:
				<br />
				<br />
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Communication
				</Strong>
				: Email, web, and file transfer services.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Configuration
				</Strong>
				: DHCP for dynamic IP assignment and manual IP management.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Security
				</Strong>
				: Firewalls, VPNs, and intrusion detection/prevention.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Management
				</Strong>
				: SNMP for monitoring and network management tools.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Remote Access
				</Strong>
				: Telnet/SSH for remote control and access.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Name Resolution
				</Strong>
				: DNS for translating domain names to IP addresses.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Load Balancing
				</Strong>
				: Distributing traffic to optimize performance.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Backup & Recovery
				</Strong>
				: Systems for data backup and disaster recovery.
				<br />
				<br />
				These services ensure efficient, secure, and reliable network operations.{"\n\n"}
			</Text>
		</Box>
		<Box min-width="100px" min-height="100px" id="networking" />
		<Section padding="0 0 30px 0" md-padding="60px 0 30px 0" quarkly-title="Footer-15" background="#292929">
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
						<br />
						{"\n\n"}
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
						{" "}Closed - Sunday{"\n\n"}
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
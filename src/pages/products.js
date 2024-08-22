import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, LinkBox, Text, Hr, Section } from "@quarkly/widgets";
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
		<Components.NavMenu
			background="#888888"
			position="static"
			top={0}
			z-index="1"
			height="130px"
		>
			<Override slot="link1" href="/products" />
			<Override slot="link2" href="/services" />
			<Override slot="link3" href="/contact-and-about-us" />
			<Override slot="linkBox" align-self="center" />
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
			background="#bebebe"
			position="sticky"
			top={0}
			z-index="1"
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
					text-decoration-line="underline"
					padding="10px 10px 10px 10px"
					background="#bdbdbd"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
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
				<Link
					href="#preowned"
					color="#ffffff"
					text-align="center"
					font="bold 24px --fontFamily-googleGabarito"
					background="green"
					border-width="2px"
					border-style="solid"
					border-radius="15px 10px 20px 5px"
					padding="10px 10px 10px 10px"
					border-color="#000000"
				>
					PREOWNED SYSTEMS
				</Link>
			</Box>
		</Box>
		<Box
			min-height="100px"
			height="800px"
			min-width="100px"
			width="1700px"
			display="flex"
			overflow="visible"
			flex-direction="column"
			flex-wrap="no-wrap"
			align-content="stretch"
			overflow-y="visible"
			overflow-x="visible"
			margin="0px 0px 0px 100px"
		>
			<Components.QuarklycommunityKitCarousel
				slidesProp="3"
				height="800px"
				autoPlayIntervalProp="5000"
				autoPlay
				border-radius="50px"
			>
				<Override slot="Slide Image" height="800px" src="https://uploads.quarkly.io/66ba53019710450018a21837/images/desktops.png?v=2024-08-15T16:40:07.605Z" />
				<Override slot="Slide" height="800px" />
				<Override slot="Slide Content" overflow-x="visible" overflow-y="visible" display="none" />
				<Override slot="Slide Image 2" src="https://uploads.quarkly.io/66ba53019710450018a21837/images/l-intro-1721314901.jpg?v=2024-08-13T21:11:09.393Z" />
				<Override slot="Slide Image 1" src="https://uploads.quarkly.io/66ba53019710450018a21837/images/laptops.png?v=2024-08-15T16:39:08.354Z" />
				<Override slot="Slide Image 3" src="https://uploads.quarkly.io/66ba53019710450018a21837/images/desktops.png?v=2024-08-15T16:40:07.605Z" />
				<Override slot="Arrows" display="none" />
				<Override slot="Points" display="none" />
			</Components.QuarklycommunityKitCarousel>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Section
			background="url(https://uploads.quarkly.io/66ba53019710450018a21837/images/prebuildBanner.jpg?v=2024-08-13T12:18:27.236Z) center/cover"
			padding="140px 0"
			sm-padding="40px 0"
			quarkly-title="About-16"
			height="800px"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				justify-content="center"
				sm-min-width="280px"
				display="flex"
				flex-direction="row"
			/>
			<LinkBox href="#intel">
				<Image
					src="https://uploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11:50:04.467Z"
					display="block"
					width="275px"
					margin="0px 50px 0px 0px"
					border-radius="50px"
					border-width="3px"
					border-color="#ffffff"
					border-style="solid"
					srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/IntelCPU.png?v=2024-08-13T11%3A50%3A04.467Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</LinkBox>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="grid"
				flex-direction="row"
				justify-content="center"
				align-self="auto"
			>
				<Text
					margin="0px 0px 0px 95px"
					order="0"
					align-self="center"
					text-align="center"
					display="block"
					color="#ffffff"
					flex="0 0 auto"
					font="38px --fontFamily-googleGabarito"
					border-width="2px"
					border-color="#ffffff"
					background="#6f6f6f"
					width="250px"
					border-radius="50px"
					border-style="solid"
				>
					&lt; SORT BY &gt;
				</Text>
				<Hr
					min-height="10px"
					min-width="100%"
					margin="0px 0px 0px 0px"
					width="450px"
					background="#ffffff"
					border-radius="50px"
				/>
			</Box>
			<LinkBox href="#amd">
				<Image
					src="https://uploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11:49:52.656Z"
					display="block"
					width="275px"
					margin="0px 0px 0px 50px"
					border-style="solid"
					border-width="3px"
					border-color="#ffffff"
					border-radius="50px"
					srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/amdCPU.jpg?v=2024-08-13T11%3A49%3A52.656Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</LinkBox>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="normal 300 20px/1.5 --fontFamily-googleGabarito" margin="20px 0 20px 0" text-align="center">
				Find what best suits your needs and budget,
				<br />
				select between AMD or Intel which are both know for great performance and efficiency
				<br />
				what to know more about pre-builds? click the button below for more info.
			</Text>
			<Components.QuarklycommunityKitPopup>
				<Override
					slot="Button Open"
					border-radius="15px 10px 20px 5px"
					border-width="2px"
					border-style="solid"
					border-color="#000000"
					background="green"
					font="normal bold 16px/1.5 --fontFamily-googleGabarito"
				>
					More info
				</Override>
				<Override slot="Content" margin="0px 25px 0px 25px" />
				<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
					Prebuilt computers are fully assembled and ready-to-use systems sold by manufacturers or retailers.{" "}
					<br />
					They come with all necessary components, including the CPU, GPU, motherboard, RAM, storage, and power supply, pre-installed in a case.{" "}
					<br />
					Users simply need to plug them in and connect peripherals.{" "}
					<br />
					Prebuilt computers offer convenience and are often tested for compatibility and performance, making them a popular choice for those who want a hassle-free setup.{"\n\n"}
				</Text>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Box min-width="100px" min-height="100px" id="intel" />
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			width="100%"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21:25:09.959Z"
				display="block"
				width="1700px"
				id="intel"
				border-radius="25px"
				border-width="3px"
				border-style="solid"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-1.jpg?v=2024-08-13T21%3A25%3A09.959Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 64px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 16px 0px" font="normal bold 72px/1 --fontFamily-googleGabarito" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					DESKTOPS & LAPTOPS
				</Text>
			</Box>
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
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09:07:47.264Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="280px"
						object-fit="contain"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/PC1.png?v=2024-08-19T09%3A07%3A47.264Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							11th Gen Core i5 Bit Fenix
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							R 9 999
						</Text>
						<Components.QuarklycommunityKitPopup>
							<Override
								slot="Button Open"
								border-radius="15px 10px 20px 5px"
								background="#2a7a2c"
								padding="12px 24px 12px 24px"
								disabled={false}
								border-width="2px"
								border-style="solid"
								border-color="#000000"
							>
								Specifications
							</Override>
							<Override
								slot="Wrapper"
								flex="0 1 auto"
								display="flex"
								flex-direction="row"
								overflow-x="hidden"
								overflow-y="hidden"
							/>
							<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
								Intel Core i5 11th Gen
								<br />
								ASUS PRIME H510M-D
								<br />
								DDR4 16GB G-SKILL
								<br />
								1 Terabyte HDD
								<br />
								450W Huntkey Gaming PSU
								<br />
								RX580 8GB NITRO SAPPHIRE
								<br />
								Windows 11 Pro Activated
								<br />
								2 RGB Fans
							</Text>
						</Components.QuarklycommunityKitPopup>
					</Box>
				</Box>
				<Box
					width="100%"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="3px"
					border-style="solid"
					border-color="#bababa"
					justify-content="center"
					position="relative"
				>
					<Image
						src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09:22:09.645Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="contain"
						width="100%"
						height="280px"
						srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Dell3593.png?v=2024-08-19T09%3A22%3A09.645Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							10th Gen Core i7 DELL
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="left" font="--lead">
							R 6 999
						</Text>
						<Components.QuarklycommunityKitPopup>
							<Override
								slot="Button Open"
								border-radius="15px 10px 20px 5px"
								background="#2a7a2c"
								padding="12px 24px 12px 24px"
								border-width="2px"
								border-style="solid"
								border-color="#000000"
							>
								Specifications
							</Override>
							<Override
								slot="Wrapper"
								flex="0 1 auto"
								display="flex"
								flex-direction="row"
								overflow-y="hidden"
								overflow-x="hidden"
							/>
							<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
								Intel Core i7 10th Gen
								<br />
								DDR4 8GB
								<br />
								128GB SSD
								<br />
								MX230 2GB GDDR5
								<br />
								Windows 11 Home Activated
							</Text>
						</Components.QuarklycommunityKitPopup>
					</Box>
				</Box>
				<Box
					width="100%"
					display="none"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
						srcSet="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Freelance
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							Free
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Select plan
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box min-width="100px" min-height="100px" id="amd" />
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			justify-content="center"
			flex-direction="row"
			width="100%"
		>
			<Image
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21:32:03.090Z"
				display="block"
				width="1700px"
				id="intel"
				border-radius="25px"
				border-width="3px"
				border-style="solid"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/Untitled-2.jpg?v=2024-08-13T21%3A32%3A03.090Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Section padding="80px 0 20px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 64px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					DESKTOPS & LAPTOPS{"\n\n"}
				</Text>
			</Box>
			<Box
				display="none"
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
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						height="278px"
						object-fit="cover"
						srcSet="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Company
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							$ 199 / month
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Select plan
						</Link>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					position="relative"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="#ffffff"
						padding="4px 16px 4px 16px"
						background="--color-green"
						border-radius="50px"
						position="absolute"
						top="24px"
						right="24px"
						bottom="auto"
						left="auto"
					>
						Recomended
					</Text>
					<Image
						src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
						srcSet="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Pro
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							$ 10 / month
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Select plan
						</Link>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						max-height="278px"
						object-fit="cover"
						width="100%"
						srcSet="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						display="flex"
						flex-direction="column"
						padding="0px 30px 0px 30px"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3">
							Freelance
						</Text>
						<Text margin="0px 0px 16px 0px" text-align="center" font="--lead">
							Free
						</Text>
						<Text margin="0px 0px 48px 0px" color="--darkL2" font="--base">
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--dark"
							font="--lead"
							padding="12px 24px 12px 24px"
							border-radius="8px"
							background="--color-secondary"
							lg-padding="12px 20px 12px 20px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
						>
							Select plan
						</Link>
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
				src="https://uploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09:29:08.682Z"
				display="block"
				height="300px"
				srcSet="https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66ba53019710450018a21837/images/pngtree-out-of-stock-symbol-rectangular-sign-vector-picture-image_9579125.png?v=2024-08-19T09%3A29%3A08.682Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
		<Box min-width="100px" min-height="100px" />
		<Section md-padding="60px 0 30px 0" quarkly-title="Footer-15" padding="0 0 30px 0" background="#292929">
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
					<Text margin="0px 0px 20px 0px" font="normal 500 18px/1.5 --fontFamily-sans" letter-spacing="1px" color="#ffffff">
						CONTACT INFO
					</Text>
					<Text margin="0px 0px 5px 0px" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" color="#ffffff">
						Phone
					</Text>
					<Link
						href="tel:+2778 348 8838"
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
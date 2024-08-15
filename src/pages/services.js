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
		>
			<Box
				min-width="100px"
				min-height="100px"
				align-items="center"
				display="flex"
				flex-direction="row"
				justify-content="center"
			>
				<Link href="#repairs" color="#000000" font="bold 24px --fontFamily-googleGabarito">
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
				<Link href="#services" color="#000000" font="bold 24px --fontFamily-googleGabarito">
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
				<Link href="#networking" color="#000000" font="bold 24px --fontFamily-googleGabarito">
					NETWORKING
				</Link>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			align-items="center"
			display="flex"
			flex-direction="row"
			justify-content="center"
			id="repairs"
		>
			<Text margin="0px 0px 0px 0px" font="38px --fontFamily-googleGabarito" text-align="center">
				DESKTOP & LAPTOP
				<br />
				REPAIRS
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
		<Section padding="60px 0 40px 0" quarkly-title="Product-1">
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
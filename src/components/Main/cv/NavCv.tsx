import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import React, { useState } from "react";
import { theme } from "../../../theme";
import { Curiculum } from "./Curiculum";
import { CvDialog } from "./CvDialog";

export const NavCv: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openDialog = () => setIsOpen(true);
	const closeDialog = () => setIsOpen(false);
	const desktop = useMediaQuery("(min-width:500px)");

	return (
		<>
			<Container>
				<CvDialog isOpen={isOpen} onNo={closeDialog} />
				<Card
					style={{
						background: theme.palette.text.disabled,
						marginBottom: "10px",
					}}
				>
					<CardActionArea>
						<CardContent>
							<Accordion style={{ background: "none" }}>
								<AccordionSummary expandIcon={<FormatAlignJustifyIcon color="secondary" />}>
									<Grid container alignContent="center" direction="row">
										<Typography variant="h5" component="h2">
											CV
										</Typography>
									</Grid>
									{desktop && <Typography component="h4">My curriculum vitae</Typography>}
								</AccordionSummary>
								<AccordionDetails>
									<Curiculum />
								</AccordionDetails>
							</Accordion>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" onClick={openDialog}>
							Read more
						</Button>
					</CardActions>
				</Card>
			</Container>
		</>
	);
};

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="/">Shop</FooterLink>
			<FooterLink href="/cart">Cart</FooterLink>
			
		</Column>
		<Column>
        
        
        </Column>
        <Column>
        
        
        </Column>

		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

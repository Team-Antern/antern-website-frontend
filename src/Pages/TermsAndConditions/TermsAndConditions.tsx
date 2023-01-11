import React from "react";
import Header from "../../Components/Global/Header/Header";
import Footer from "../../Components/Global/Footer/Footer";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    Wrapper,
    Container,
    Content,
    Heading,
    Desc,
    Opening,
    Sections,
    Section,
    SectionHeading,
    SectionContent,
    UnorderdList,
    PageLink,
} from "./styles";

const TermsAndConditions = () => {
    return (
        <Wrapper>
            <Header
                wrapperStyle={{
                    background: "#101c27",
                    position: "sticky",
                    top: "0",
                    zIndex: "2",
                }}
                style={{
                    paddingTop: "3rem",
                    maxWidth: "115rem",
                    margin: "auto",
                }}
            />

            <Container>
                <Heading>
                    Terms of <span>use</span>
                </Heading>
                <Desc>Terms of Service for Antern</Desc>
                <Content>
                    <Opening>
                        <p>Welcome to Antern!</p>
                        <p>
                            These terms and conditions outline the rules and
                            regulations for the use of Antern&apos;s Website,
                            located at https://www.antern.co.
                        </p>
                        <p>
                            By accessing this website we assume you accept these
                            terms and conditions. Do not continue to use Antern
                            if you do not agree to take all of the terms and
                            conditions stated on this page.
                        </p>
                        <p>
                            The following terminology applies to these Terms and
                            Conditions, Privacy Statement and Disclaimer Notice
                            and all Agreements: &quot;Client&quot;,
                            &quot;You&quot; and &quot;Your&quot; refers to you,
                            the person log on this website and compliant to the
                            Company&apos;s terms and conditions. &quot;The
                            Company&quot;, &quot;Ourselves&quot;,
                            &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;,
                            refers to our Company. &quot;Party&quot;,
                            &quot;Parties&quot;, or &quot;Us&quot;, refers to
                            both the Client and ourselves. All terms refer to
                            the offer, acceptance and consideration of payment
                            necessary to undertake the process of our assistance
                            to the Client in the most appropriate manner for the
                            express purpose of meeting the Client&apos;s needs
                            in respect of provision of the Company&apos;s stated
                            services, in accordance with and subject to,
                            prevailing law of Netherlands. Any use of the above
                            terminology or other words in the singular, plural,
                            capitalization and/or he/she or they, are taken as
                            interchangeable and therefore as referring to same.
                        </p>
                    </Opening>
                    <Sections>
                        <Section>
                            <SectionHeading>Cookies</SectionHeading>
                            <SectionContent>
                                <p>
                                    We employ the use of cookies. By accessing
                                    Antern, you agreed to use cookies in
                                    agreement with the Antern&apos;s Privacy
                                    Policy.
                                </p>
                                <p>
                                    Most interactive websites use cookies to let
                                    us retrieve the user&apos;s details for each
                                    visit. Cookies are used by our website to
                                    enable the functionality of certain areas to
                                    make it easier for people visiting our
                                    website. Some of our affiliate/advertising
                                    partners may also use cookies.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>License</SectionHeading>
                            <SectionContent>
                                <p>
                                    Unless otherwise stated, Antern and/or its
                                    licensors own the intellectual property
                                    rights for all material on Antern. All
                                    intellectual property rights are reserved.
                                    You may access this from Antern for your own
                                    personal use subjected to restrictions set
                                    in these terms and conditions.
                                </p>
                                <p>You must not:</p>
                                <UnorderdList>
                                    <li>Republish material from Antern</li>
                                    <li>
                                        Sell, rent or sub-license material from
                                        Antern
                                    </li>
                                    <li>
                                        Reproduce, duplicate or copy material
                                        from Antern
                                    </li>
                                    <li>Redistribute content from Antern</li>
                                </UnorderdList>
                                <p>
                                    This Agreement shall begin on the date
                                    hereof.
                                </p>
                                <p>
                                    Parts of this website offer an opportunity
                                    for users to post and exchange opinions and
                                    information in certain areas of the website.
                                    Antern does not filter, edit, publish or
                                    review Comments prior to their presence on
                                    the website. Comments do not reflect the
                                    views and opinions of Antern,its agents
                                    and/or affiliates. Comments reflect the
                                    views and opinions of the person who post
                                    their views and opinions. To the extent
                                    permitted by applicable laws, Antern shall
                                    not be liable for the Comments or for any
                                    liability, damages or expenses caused and/or
                                    suffered as a result of any use of and/or
                                    posting of and/or appearance of the Comments
                                    on this website.
                                </p>
                                <p>
                                    Antern reserves the right to monitor all
                                    Comments and to remove any Comments which
                                    can be considered inappropriate, offensive
                                    or causes breach of these Terms and
                                    Conditions.
                                </p>
                                <p>You warrant and represent that:</p>
                                <UnorderdList>
                                    <li>
                                        You are entitled to post the Comments on
                                        our website and have all necessary
                                        licenses and consents to do so;
                                    </li>
                                    <li>
                                        The Comments do not invade any
                                        intellectual property right, including
                                        without limitation copyright, patent or
                                        trademark of any third party;
                                    </li>
                                    <li>
                                        The Comments do not contain any
                                        defamatory, libelous, offensive,
                                        indecent or otherwise unlawful material
                                        which is an invasion of privacy
                                    </li>
                                    <li>
                                        The Comments will not be used to solicit
                                        or promote business or custom or present
                                        commercial activities or unlawful
                                        activity.
                                    </li>
                                </UnorderdList>
                                <p>
                                    You hereby grant Antern a non-exclusive
                                    license to use, reproduce, edit and
                                    authorize others to use, reproduce and edit
                                    any of your Comments in any and all forms,
                                    formats or media.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>
                                Hyperlinking to our Content
                            </SectionHeading>
                            <SectionContent>
                                <p>
                                    The following organizations may link to our
                                    Website without prior written approval:
                                </p>
                                <UnorderdList>
                                    <li>Government agencies;</li>
                                    <li>Search engines;</li>
                                    <li>News organizations;</li>
                                    <li>
                                        Online directory distributors may link
                                        to our Website in the same manner as
                                        they hyperlink to the Websites of other
                                        listed businesses; and
                                    </li>
                                    <li>
                                        System wide Accredited Businesses except
                                        soliciting non-profit organizations,
                                        charity shopping malls, and charity
                                        fundraising groups which may not
                                        hyperlink to our Web site.
                                    </li>
                                </UnorderdList>
                                <p>
                                    These organizations may link to our home
                                    page, to publications or to other Website
                                    information so long as the link: (a) is not
                                    in any way deceptive; (b) does not falsely
                                    imply sponsorship, endorsement or approval
                                    of the linking party and its products and/or
                                    services; and (c) fits within the context of
                                    the linking party&apos;s site.
                                </p>
                                <p>
                                    We may consider and approve other link
                                    requests from the following types of
                                    organizations:
                                </p>
                                <UnorderdList>
                                    <li>
                                        commonly-known consumer and/or business
                                        information sources;
                                    </li>
                                    <li>dot.com community sites;</li>
                                    <li>
                                        associations or other groups
                                        representing charities;
                                    </li>
                                    <li>online directory distributors;</li>
                                    <li>internet portals;</li>
                                    <li>
                                        accounting, law and consulting firms;
                                        and
                                    </li>
                                    <li>
                                        educational institutions and trade
                                        associations.
                                    </li>
                                </UnorderdList>
                                <p>
                                    We will approve link requests from these
                                    organizations if we decide that: (a) the
                                    link would not make us look unfavorably to
                                    ourselves or to our accredited businesses;
                                    (b) the organization does not have any
                                    negative records with us; (c) the benefit to
                                    us from the visibility of the hyperlink
                                    compensates the absence of Antern; and (d)
                                    the link is in the context of general
                                    resource information.
                                </p>
                                <p>
                                    These organizations may link to our home
                                    page so long as the link: (a) is not in any
                                    way deceptive; (b) does not falsely imply
                                    sponsorship, endorsement or approval of the
                                    linking party and its products or services;
                                    and (c) fits within the context of the
                                    linking party&apos;s site.
                                </p>
                                <p>
                                    If you are one of the organizations listed
                                    in paragraph 2 above and are interested in
                                    linking to our website, you must inform us
                                    by sending an e-mail to Antern. Please
                                    include your name, your organization name,
                                    contact information as well as the URL of
                                    your site, a list of any URLs from which you
                                    intend to link to our Website, and a list of
                                    the URLs on our site to which you would like
                                    to link. Wait 2-3 weeks for a response.
                                </p>
                                <p>
                                    Approved organizations may hyperlink to our
                                    Website as follows:
                                </p>
                                <UnorderdList>
                                    <li>By use of our corporate name; or</li>
                                    <li>
                                        By use of the uniform resource locator
                                        being linked to; or
                                    </li>
                                    <li>
                                        By use of any other description of our
                                        Website being linked to that makes sense
                                        within the context and format of content
                                        on the linking party&apos;s site.
                                    </li>
                                </UnorderdList>
                                <p>
                                    No use of Antern&apos;s logo or other
                                    artwork will be allowed for linking absent a
                                    trademark license agreement.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>iFrames</SectionHeading>
                            <SectionContent>
                                Without prior approval and written permission,
                                you may not create frames around our Webpages
                                that alter in any way the visual presentation or
                                appearance of our Website.
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Content Liability</SectionHeading>
                            <SectionContent>
                                We shall not be hold responsible for any content
                                that appears on your Website. You agree to
                                protect and defend us against all claims that is
                                rising on your Website. No link(s) should appear
                                on any Website that may be interpreted as
                                libelous, obscene or criminal, or which
                                infringes, otherwise violates, or advocates the
                                infringement or other violation of, any third
                                party rights.
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Your Privacy</SectionHeading>
                            <SectionContent>
                                Please read Privacy Policy
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>
                                Reservation of Rights
                            </SectionHeading>
                            <SectionContent>
                                We reserve the right to request that you remove
                                all links or any particular link to our Website.
                                You approve to immediately remove all links to
                                our Website upon request. We also reserve the
                                right to amen these terms and conditions and
                                it&apos;s linking policy at any time. By
                                continuously linking to our Website, you agree
                                to be bound to and follow these linking terms
                                and conditions.
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>
                                Removal of links from our website
                            </SectionHeading>
                            <SectionContent>
                                <p>
                                    If you find any link on our Website that is
                                    offensive for any reason, you are free to
                                    contact and inform us any moment. We will
                                    consider requests to remove links but we are
                                    not obligated to or so or to respond to you
                                    directly.
                                </p>
                                <p>
                                    We do not ensure that the information on
                                    this website is correct, we do not warrant
                                    its completeness or accuracy; nor do we
                                    promise to ensure that the website remains
                                    available or that the material on the
                                    website is kept up to date.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Disclaimer</SectionHeading>
                            <SectionContent>
                                <p>
                                    To the maximum extent permitted by
                                    applicable law, we exclude all
                                    representations, warranties and conditions
                                    relating to our website and the use of this
                                    website. Nothing in this disclaimer will:
                                </p>
                                <UnorderdList>
                                    <li>
                                        limit or exclude our or your liability
                                        for death or personal injury;
                                    </li>
                                    <li>
                                        limit or exclude our or your liability
                                        for fraud or fraudulent
                                        misrepresentation;
                                    </li>
                                    <li>
                                        limit any of our or your liabilities in
                                        any way that is not permitted under
                                        applicable law; or
                                    </li>
                                    <li>
                                        exclude any of our or your liabilities
                                        that may not be excluded under
                                        applicable law.
                                    </li>
                                </UnorderdList>
                                <p>
                                    The limitations and prohibitions of
                                    liability set in this Section and elsewhere
                                    in this disclaimer: (a) are subject to the
                                    preceding paragraph; and (b) govern all
                                    liabilities arising under the disclaimer,
                                    including liabilities arising in contract,
                                    in tort and for breach of statutory duty.
                                </p>
                                <p>
                                    As long as the website and the information
                                    and services on the website are provided
                                    free of charge, we will not be liable for
                                    any loss or damage of any nature.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Contact Us</SectionHeading>
                            <SectionContent>
                                <p>
                                    You can contact us using the given details
                                    below:-
                                </p>
                                <UnorderdList>
                                    <li>Email ID:- team@antern.co</li>
                                    <li>Contact Number:- +91 7783878890</li>
                                    <li>
                                        Address:- Indrapuri,Patna-800024, Bihar ,
                                        India
                                    </li>
                                </UnorderdList>
                            </SectionContent>
                        </Section>
                    </Sections>
                    <NavLink to="/privacy-policy">
                        <PageLink>Privacy Policy</PageLink>
                    </NavLink>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default TermsAndConditions;

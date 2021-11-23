import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import ManageCareTeam from './ManageCareTeam';
import Footer from './Footer';
import '../html-css/css/resource.css'

function Resource(props) {
    return (
        <div>
            <Nav />
            <div className="container"><br/>
                <h3>Alert Response</h3>
                <p>Mental Health resources and emergency response are lacking and often involve municipal law enforcement. This has led to escalated situations where individuals in crisis were severely injured or killed. Many individuals thus avoid seeking assistance/help due to the fear of law enforcement involvement. 
                Cultivate Community is a website that provides an alternate response model for individuals in mental health crisis.</p>
                {!props.isLoggedIn ?
                    (
                        <p>Please <Link to="/login"> log in </Link> to send an alert to Care Team members.</p>
                    ):
                    (
                        <div>
                            <button type="button" className="btn btn-warning">Send Alert to All Care Team Members</button><br/><br/><br/>
                        </div>
                    )
                }
                <h3>Care Teams</h3>
                {!props.isLoggedIn ?
                    (
                        <p>Please <Link to="/login"> log in </Link> to view or manage Care Team members.</p>
                    ):
                    (
                        <ManageCareTeam />
                    )
                }
            </div>

            <br/><br/>

            <div className="container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <h3>General Resources</h3>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Emergency Lines
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    <h6>1. Call 911</h6>
                    <p>
                        If you or a loved one is in immediate danger, calling 911 and talking with police may be necessary. It is important to notify the operator that it is a psychiatric emergency and ask for police officers trained in crisis intervention or trained to assist people experiencing a psychiatric emergency.
                    </p>
                    <h6>2. <a href="https://www.suicidepreventionlifeline.org/">National Suicide Prevention Lifeline -- Call 800-273-TALK (8255)</a></h6>
                    <p>
                        If you or someone you know is in crisis—whether they are considering suicide or not—please call the toll-free Lifeline at 800-273-TALK (8255) to speak with a trained crisis counselor 24/7. The National Suicide Prevention Lifeline connects you with a crisis center in the Lifeline network closest to your location. Your call will be answered by a trained crisis worker who will listen empathetically and without judgment. The crisis worker will work to ensure that you feel safe and help identify options and information about mental health services in your area. Your call is confidential and free.
                    </p>
                    <h6>3. <a href="http://www.crisistextline.org/">Crisis Text Line -- Text NAMI to 741-741</a></h6>
                    <p>
                        Connect with a trained crisis counselor to receive free, 24/7 crisis support via text message. 
                    </p>
                    <h6>4. <a href="http://www.thehotline.org/">National Domestic Violence Hotline -- Call 800-799-SAFE (7233)</a></h6>
                    <p>
                        Trained expert advocates are available 24/7 to provide confidential support to anyone experiencing domestic violence or seeking resources and information. Help is available in Spanish and other languages.
                    </p>
                    <h6>5. <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline">National Sexual Assault Hotline -- Call 800-656-HOPE (4673)</a></h6>
                    <p>
                        Connect with a trained staff member from a sexual assault service provider in your area that offers access to a range of free services. Crisis chat support is available at Online Hotline. Free help, 24/7.
                    </p><br/>
                    <h6>Source: <a href="https://nami.org/help">National Alliance on Mental Illness (NAMI)</a></h6>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    AA Meeting Locations
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    <h6>Find AA Meetings by States</h6>
                    <div className="container">
                        <a href="https://alcoholicsanonymous.com/">
                        <img src="./_images/aa-meetings.jpg" alt="Map of AA Meetings" id="map"/>
                        </a>
                    </div><br/>
                    <h6>Call 800-839-1686 to get 24/7 addiction help:</h6>
                    <ul>
                        <li>
                        Find the best drug rehab centers
                        </li>
                        <li>
                        Access free detox and rehab programs
                        </li>
                        <li>
                        Get 24-hour guidance on starting your recovery
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Helpful Links
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    <ul>
                        <li>
                        <a href="https://al-anon.org/">Al-Anon Family Groups</a>
                        </li>
                        <li>
                        <a href="https://www.nar-anon.org/">Nar-Anon Family Groups</a>
                        </li>
                        <li>
                        <a href="https://www.smartrecovery.org/family/">SMART Recovery</a>
                        </li>
                        <li>
                        <a href="https://www.ncbon.com/discipline-compliance-drug-monitoring-programs">Chemical Dependency Discipline Program</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer />
            </div>
    )
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.user.username,
        password: reduxState.user.password,
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Resource);
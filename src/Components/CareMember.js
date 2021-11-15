function CareMember(props) {
    const member = props.member
    return (
        <div key={member.smsAddress}>
            {member.firstName} {member.lastName} <a href={"mailto:" + member.smsAddress}>{member.smsAddress}</a> <a href={"tel:" + member.smsAddress}>{member.phone}</a><br /><br />
        </div>
    )
}

export default CareMember;
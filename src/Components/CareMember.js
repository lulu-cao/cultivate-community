function CareMember(props) {
    const member = props.member
    return (
        <div key={member.smsAddress}>
            {member.firstName} {member.lastName} {member.smsAddress} {member.phoneNumber}<br /><br />
        </div>
    )
}

export default CareMember;
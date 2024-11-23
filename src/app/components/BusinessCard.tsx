interface BusinessCardProps{
    ref: React.RefObject<HTMLDivElement>
    firstName: string;
    lastName: string;
    companyName: string;
    position: string;
    email: string;
    phoneNumber: string;
    color: string;
    textColor: string
}

export default function BusinessCard(props: BusinessCardProps){
    return(
        <div ref={props.ref} className={`place-self-center bg-gray-200 w-72 h-auto flex flex-col p-2.5 space-y-1 m-5`} style={{backgroundColor:props.color}}>
            <div className={`flex-col flex space-y-[0.5px]`}>
            <p className={`text-3xl font-bold`} style={{color: props.textColor}}>
                {props.firstName} {props.lastName}
            </p>
            <p className={`mb-7 font-bold`} style={{color: props.textColor}}>
                {props.position}
            </p>
            </div>

            <p style={{color: props.textColor}}> 
                {props.companyName}
            </p>
            <p style={{color: props.textColor}}>
                {props.email}
            </p>
            <p style={{color: props.textColor}}>
                {props.phoneNumber}
            </p>
        </div>
    );
}
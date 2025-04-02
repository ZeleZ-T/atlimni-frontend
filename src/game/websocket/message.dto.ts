class MessageDto {
    constructor(
        public handler: string,
        public type: string,
        public data: any
    ) {}
}

export default MessageDto;
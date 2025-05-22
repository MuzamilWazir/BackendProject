class ApiError extends Error{
    constructor(
        statusCode,
        messasge = "Something Went Wrong",
        errors = [],
        statck=''
    ) {
        super(messasge)
        this.statusCode = statusCode,
            this.data = null,
            this.message = messasge,
            this.success = false,
            this.errors = errors


            if (statck) {
                this.statck = statck
        }
            else {
                Error.captureStackTrace(this,this.contructor)
        }
    }
}

export {ApiError}
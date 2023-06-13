enum RequestStatus {
    Pending,
    Success,
    Error,
}
function handlePromise<TResponse>(promise: Promise<TResponse>) {
    let status = RequestStatus.Pending
    let response: TResponse

    const fetcher = promise.then(
        res => {
            status = RequestStatus.Success
            response = res
        },
        err => {
            status = RequestStatus.Error
            response = err
        },
    )

    return () => {
        switch (status) {
            case RequestStatus.Pending:
                throw fetcher
            case RequestStatus.Error:
                throw response
            default:
                return response
        }
    }
}

export default handlePromise

const IdPage = ({
    params,
}: {
    params: {id: string}
}) => {
    return (
        <div>
            userId: {params.id}
        </div>
    )
}

export default IdPage;
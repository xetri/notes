interface Props {
    content: string;
    id: number;
    func: Function;
}

export default (props: Props) => (
    <div className="card w-100 mt-2">
        <div className="card-body">
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <h5>{++props.id}.&nbsp;</h5><p className="card-text">{props.content}</p>
                </div>
                <span className='text text-danger btn' onClick={() => props.func()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </span>
            </div>
        </div>
    </div >);
const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h1 className="title-text">Team Member Allocation</h1>
                    <h3 className="title-content"><span className="title-team-style">{selectedTeam}</span> has {teamMemberCount} Members</h3>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3 px-3">
                <details className="col-10 col-sm-12 col-md-12 col-lg-10 mb-2 p-2 rounded shadow-inner bg-secondary">
                    <summary className="list-none p-8" tabIndex={-1}>
                        <div className="d-flex flex-row">
                            <span className="d-flex col-11 text-dark text-left">Discuss the issue?</span>
                            <span className="ms-5">
                                <svg className="rotate-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd" transform="translate(-446 -398)"><path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path><polygon points="446 418 466 418 466 398 446 398"></polygon></g></svg>
                            </span>   
                        </div>
                    </summary>
                    <div class="p-8 border-t dark:border-purple-60 border-purple-10 ">
                        <p class="whitespace-pre-wrap my-4">Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering. You should always treat these inputs as read-only.</p>
                    </div>
                </details>
            </div>
        </header>
        
    )
}

export default Header
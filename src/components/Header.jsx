const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h1 className="title-text">Team Member Allocation</h1>
                    <h3 className="title-content"><span className="title-team-style">{selectedTeam}</span> has {teamMemberCount} Members</h3>
                </div>
            </div>
        </header>
    )
}

export default Header
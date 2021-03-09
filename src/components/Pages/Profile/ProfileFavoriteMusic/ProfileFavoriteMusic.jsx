function ProfileFavoriteMusic({ favoriteMusic }) {
    const genresList = favoriteMusic.map((genre, i) => {
        return (
            <div key={`tag-${genre}-${i}`} className="btn btn-tags-filled fw-5 m-2">
                {genre}
            </div>
        );
    });
    return (
        <div className="row mt-5 mb-5">
            <div className="col">
                <h4 className="fw-5 mb-4">Favorite music</h4>
                {genresList}
            </div>
        </div>
    );
};
export default ProfileFavoriteMusic;
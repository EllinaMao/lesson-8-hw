const avatars = [
    {
        id: 1,
        url: "/disguise.jpg",
        alt: "Master of masks"
    },
    {
        id: 2,
        url: "/druid.jpg",
        alt: "Elf druid"
    },
    {
        id: 3,
        url: "/moonMaiden.jpg",
        alt: "Moon Maiden"
    },
    {
        id: 4,
        url: "/mothPerson.jpg",
        alt: "Moth Person"
    },
    {
        id: 5,
        url: "/myDog.jpg",
        alt: "My Dog"
    },
    {
        id: 6,
        url: "/omamori.jpg",
        alt: "Omamori"
    },
    {
        id: 7,
        url: "/plagueDoctor.jpg",
        alt: "Plague Doctor"
    },
    {
        id: 8,
        url: "/saintMonk.jpg",
        alt: "Saint Monk"
    },
    {
        id: 9,
        url: "/shadowReaper.jpg",
        alt: "Shadow Reaper"
    }
];



const PickStandardAvatar = ({ selectedAvatar, onPick }) => {

    return (
        <div className="avatar-selection-grid">
            {avatars.map(avatar => (
                <div
                    key={avatar.id}
                    className={`avatar-option ${selectedAvatar === avatar.url ? 'selected' : ''}`}
                    onClick={() => onPick(avatar.url)}
                >
                    <img
                        src={avatar.url}
                        alt={avatar.alt}
                        className="avatar-image"
                    />
                </div>
            ))}
        </div>
    );
};


export default PickStandardAvatar;
import Image2 from '../../assets/gallery-3.jpg'

function Business() {
    return (
        <div className="page2" style={{textAlign: "center", height:"100vh", }}>
            <div className='news'>
            <div className="title">
                <h2>Business News</h2>
                <br />
                <br />
                <img src={Image2} alt="" /> <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque quaerat reiciendis, repellendus facere perferendis voluptate officia repellat. Repellendus expedita mollitia minus est atque sunt magnam placeat, facilis at ipsa.</p>
            </div>
            </div>
        </div>
    );
}

export default Business
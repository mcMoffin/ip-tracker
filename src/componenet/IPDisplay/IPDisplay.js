function IPDisplay({ IPData }) {
    return (
        <div className="IPDataBar">
            <div>
                <p className="display-title">IP Address</p>
                <p className="display-data">{IPData.ip}</p>
            </div>
            <div>
                <p className="display-title">Location</p>
                <p className="display-data">{IPData.city}, {IPData.region_code}, {IPData.postal}</p>
            </div>
            <div>
                <p className="display-title">Timezone</p>
                <p className="display-data">UTC {IPData.utc_offset}</p>
            </div>
            <div>
                <p className="display-title">ISP</p>
                <p className="display-data">{IPData.org}</p>
            </div>
        </div>
    );
};

export default IPDisplay;
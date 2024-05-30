import React, { forwardRef } from 'react';
import Campaign from "../../assets/campaign.json"

const CampaignRow = forwardRef(({ content, toggleFunction, DISPATCH }, ref) => {
    return (
        <tr className="jsgrid-row">
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Campaign.width[0] }}
                onClick={() => DISPATCH({ type: "VIEW", payload: content.id })}
            >
                {content ? content.campaign_name : 'Campaign Name'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Campaign.width[1] }}>
                {content ? content.Payout : 'Payout'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Campaign.width[2] }}>
                {content ? content.Advertiser : 'Advertiser'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Campaign.width[3] }}>
                {content ? content.Status : 'Status'}
            </td>

            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Campaign.width[4] }}>
                <div className="btn-group">
                    <button type="button" className="btn btn-info" fdprocessedid="ob28q9">Action</button>
                    <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown" fdprocessedid="kow4cl">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu" role="menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </td>

        </tr>
    );
})
export default CampaignRow;
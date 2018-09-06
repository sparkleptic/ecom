import oauthSignature from 'oauth-signature';

function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
        }
    }
    return parts.join('&');
}

function getTimeStamp() {
    return Math.round(+new Date() / 1000);
};

function getNonce() {
    return Math.random() * 1.2483;
};

export default function signedUrl(endPoint, method, filters = {}) {

    let oauth_data = {
        oauth_consumer_key: 'ck_56fe7dd9f541535e374b1b56a14da12140dc80f9',
        oauth_nonce: getNonce(),
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: getTimeStamp(),
        oauth_version: '1.0',
        per_page: '10'
    };
    oauth_data = Object.assign({}, oauth_data, filters);

    let url = 'https://sunmax.ourgoogle.in/clients/wprestapi/wp-json/wc/v2/' + endPoint;
    const consumer_secret = 'cs_6a0ea4ebc36cd6bf38f359da43fd813b423605ef';
    oauth_data.oauth_signature = oauthSignature.generate(method, url, oauth_data, consumer_secret);
    let oauth_args = toQueryString(oauth_data);
    let final_request_uri_str = url + '?' + oauth_args;
    return final_request_uri_str;
}
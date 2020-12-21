import React from 'react';

class Accounts extends React.Component {
  constructor() {
    super();
    this.state = { accts: [{"accountId":"01010OA00P207","accountName":"Jwalker","currency":"JPY","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P208","accountName":"Jwalker","currency":"USD","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P209","accountName":"Jwalker","currency":"USD","customerType":"PERSON","accountType":"SVGS","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P210","accountName":"Jwalker","currency":"GBP","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"}] };
  }

  componentDidMount() {
    fetch('https://api.fusionfabric.cloud/retail-banking/accounts/v1/accounts?customerId=FFDC02')
      .then(response => response.json())
      .then(json => this.setState({ accts: json.data }));
  }

  render() {
    return (
      <div>
        <h1>Accounts</h1>
        {
          this.state.accts.length == 0
            ? 'Loading ...'
            : this.state.accts.map(user => (
              <div key={accts.accountId}>
                
                <label>
                  {accts.accountName}
                </label>
              </div>
            ))
        }
      </div>
    );
  }
}

export default Accounts;

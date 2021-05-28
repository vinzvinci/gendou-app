<template>
  <ul id="qa" class="qa">
    <li>
      <h3>What is DEV AIRDROP?</h3>
      <p>
        "Dev Protocol", a made-in-Japan DeFi protocol, is launching a "GitHub
        Airdrop" to commemorate its first anniversary of releasing
        "Stakes.social", a sponsor platform, and as appreciation for your
        contribution so far.
      </p>
      <p>
        It's hard for developers to rely on goodwill from patrons if they wish
        to continuously develop OSS as well as grow the community itself. We'd
        like you to use the airdropped DEV tokens to help stake other projects,
        while focusing on OSS development yourself. By using our Stakes.social
        platform, you can help other projects in need and have a stream of
        additional income by doing so.
      </p>
      <dl>
        <dt>Campaign Period</dt>
        <dd>28th May - 24th June (About 1 month)</dd>
        <dt>Details</dt>
        <dd>
          In accordance with your number of commits at GitHub in the last one
          year period (2020-05-01 to 2021-05-01), you’ll get at most 1000 DEV
          token. We’re giving out the total amount of 283,000 DEV to the first
          2,203 applicants. As soon as the first 2,203 people have received DEV,
          we’ll close the campaign. If you’re willing to join, please take
          advantage of the program while you can.
        </dd>
        <dt>Rewards table</dt>
        <dd>
          <table>
            <thead>
              <tr>
                <th>Commits &gt;</th>
                <th># of people</th>
                <th>Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5,000</td>
                <td>3</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>2,000</td>
                <td>200</td>
                <td>400</td>
              </tr>
              <tr>
                <td>500</td>
                <td>2,000</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>
              *If the first-come-first-served quota is full, it will be
              automatically moved down.</small
            >
          </p>
        </dd>
      </dl>
    </li>
    <li>
      <h3>What are Dev tokens?</h3>
      <p>
        DEV tokens are a proprietary currency that can be used in the Dev
        Protocol. You can support OSS projects by using DEV tokens and help
        developers with sustainable funding of their projects.
      </p>
      <p><LinkToFAQ /></p>
    </li>
    <li>
      <h3>What is Dev Protocol?</h3>
      <p>
        "Dev Protocol" is a technology that realizes sustainability for
        creators' activities. It is mined by creators, and also a reward for
        users supporting creators through a process called staking. Because Dev
        Protocol is completely decentralized and is a middleware protocol for
        on-chain governance, anyone can join the ecosystem by developing various
        applications (Dapps).
      </p>
      <p>
        Under the mission of "creating a society where all innovators are valued
        and can achieve sustainably", Dev Protocol started MVP in 2018 and began
        a service for OSS developers to monetize. After the release of
        "Stakes.social", our first Dapp, in June 2020, our sustainable incentive
        scheme that utilizes a blockchain, attracted attention from overseas,
        and its ecosystem continues to grow dramatically. In the last one year,
        the total number of staking reached around 6 million USD, and the
        cumulative total amount of reward went up to approximately 2 million
        USD. (as of April 2021)
      </p>
      <p>*Dev Protocol gets support from Microsoft for Startups.</p>
      <p><LinkToFAQ /></p>
    </li>
    <li>
      <h3>What is Stakes.social?</h3>
      <p>
        Stakes.social is a new sponsor platform where both developers and
        sponsors are rewarded with tokens if they support their favorite
        projects by staking dev tokens. Over 1,600 OSS projects issue tokens
        (utility token with ERC-20 form), and many developers, including both
        individuals and firms, succeed in achieving sustainability through
        fundraising. There is an increasing number of unique creators joining
        Stakes.social, so you can support different creators such as OSS
        developers, VR artists, NFT markets, green projects, and Vtubers.
      </p>
    </li>
    <li>
      <h3>What's Staking?</h3>
      <p>
        It is a framework where people contribute to the network by locking
        (temporarily making inaccessible) their crypto assets. In terms of Dev,
        when people stake "DEV token" (ERC20) for to support creator's works,
        they are rewarded with dev tokens for doing so.
      </p>
    </li>
    <li>
      <h3>Learn more</h3>
      <iframe
        src="https://drive.google.com/file/d/1awsXIOl7cuX8hgDHfMI7q5xKwImEpMsN/preview"
        frameborder="no"
        width="640"
        height="480"
      ></iframe>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

table {
  width: 100%;
  border: 1px solid #0000001f;
  padding: 1rem;
  border-collapse: separate;
  @media (max-width: 576px) {
    padding: 0.5rem;
  }
  th {
    font-family: sans-serif;
    font-weight: normal;
  }
  td {
    font-family: 'IBM Plan mono', monospace;
  }
}

p,
h3,
h4,
dl,
dd {
  margin: 0;
}

.qa {
  display: grid;
  gap: 6rem;
  h3,
  h4 {
    font-family: 'IBM Plex Mono', monospace;
  }
  p,
  dl {
    font-family: sans-serif;
  }
  & > li {
    display: grid;
    gap: 1rem;
  }
  dl {
    display: grid;
    gap: 0.5rem;
    dd {
      margin-left: 1rem;
    }
  }
  iframe {
    width: 100%;
  }
}
</style>

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.BidHistory = void 0
const react_1 = require('react')
const jsx_runtime_1 = require('react/jsx-runtime')
const react_2 = require('react')
const PricingString_1 = require('@zoralabs/nft-components/dist/utils/PricingString')
// const PricingString_1 = require("../utils/PricingString");
const AddressView_1 = require('@zoralabs/nft-components/dist/components/AddressView')
const NFTDataContext_1 = require('@zoralabs/nft-components/dist/context/NFTDataContext')
const useMediaContext_1 = require('@zoralabs/nft-components/dist/context/useMediaContext')
const InfoContainer_1 = require('@zoralabs/nft-components/dist/nft-full/InfoContainer')
const dateFromTimestamp = (timestamp) =>
  new Date(parseInt(timestamp, 10) * 1000)
const formatDate = (timestamp) =>
  dateFromTimestamp(timestamp).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
const BidHistory = ({ showPerpetual = true, className }) => {
  const { nft } = react_2.useContext(NFTDataContext_1.NFTDataContext)
  const { getString, getStyles, style } = useMediaContext_1.useMediaContext()
  const getPastBids = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h
    const { data } = nft
    if (!data || !data.nft) {
      return jsx_runtime_1.jsx(react_2.Fragment, {}, void 0)
    }
    const currentBid = (
      (_a = data.pricing.reserve) === null || _a === void 0
        ? void 0
        : _a.currentBid
    )
      ? [
          (_b = data.pricing.reserve) === null || _b === void 0
            ? void 0
            : _b.currentBid,
        ]
      : []
    const eventsList = [
      ...(showPerpetual ? data.pricing.perpetual.bids : []),
      ...(((_c = data.pricing.reserve) === null || _c === void 0
        ? void 0
        : _c.previousBids) || []),
      ...currentBid,
    ].map((bid) => ({
      activityDescription: getString('BID_HISTORY_BID'),
      actor: bid.bidder.id,
      pricing: jsx_runtime_1.jsx(
        PricingString_1.PricingString,
        { pricing: bid.pricing, showUSD: false },
        void 0
      ),
      createdAt: bid.createdAtTimestamp,
      // hint for type inference
      transactionHash: bid.transactionHash,
    }))
    if (
      ((_d = data.pricing.reserve) === null || _d === void 0
        ? void 0
        : _d.createdAtTimestamp) &&
      // Only show approved auction listings
      ((_e = data.pricing.reserve) === null || _e === void 0
        ? void 0
        : _e.approvedTimestamp)
    ) {
      eventsList.push({
        activityDescription: getString('BID_HISTORY_LISTED'),
        pricing: jsx_runtime_1.jsx(react_2.Fragment, {}, void 0),
        actor: data.pricing.reserve.tokenOwner.id,
        // TODO(iain): Update to the timestamp when approved
        createdAt: data.pricing.reserve.approvedTimestamp,
        transactionHash: data.pricing.reserve.transactionHash,
      })
    }
    if (
      data.pricing &&
      data.pricing.reserve &&
      data.pricing.reserve.current.likelyHasEnded &&
      (data.pricing.reserve.status === 'Active' ||
        data.pricing.reserve.status === 'Finished')
    ) {
      const highestBid =
        data.pricing.reserve.currentBid || data.pricing.reserve.previousBids[0]
      eventsList.push({
        activityDescription: getString('BID_HISTORY_WON_AUCTION'),
        pricing: jsx_runtime_1.jsx(react_2.Fragment, {}, void 0),
        actor: highestBid.bidder.id,
        createdAt: data.pricing.reserve.expectedEndTimestamp,
        transactionHash:
          ((_f = data.pricing.reserve.currentBid) === null || _f === void 0
            ? void 0
            : _f.transactionHash) || null,
      })
    }
    if (
      'zoraNFT' in data &&
      data.zoraNFT &&
      data.zoraNFT.createdAtTimestamp &&
      !('zoraIndexerResponse' in data)
    ) {
      eventsList.push({
        activityDescription: getString('BID_HISTORY_MINTED'),
        pricing: jsx_runtime_1.jsx(react_2.Fragment, {}, void 0),
        actor: data.nft.creator || '',
        createdAt: data.zoraNFT.createdAtTimestamp,
        transactionHash: null,
      })
    }
    if ('zoraIndexerResponse' in data && data.zoraIndexerResponse.minter) {
      const unixDate =
        new Date(
          ((_g = data.zoraIndexerResponse.mintTransferEvent) === null ||
          _g === void 0
            ? void 0
            : _g.blockTimestamp) + 'Z'
        ).getTime() / 1000
      eventsList.push({
        activityDescription: getString('BID_HISTORY_MINTED'),
        pricing: jsx_runtime_1.jsx(react_2.Fragment, {}, void 0),
        actor: data.zoraIndexerResponse.minter,
        createdAt: unixDate.toString(),
        transactionHash:
          ((_h = data.zoraIndexerResponse.mintTransferEvent) === null ||
          _h === void 0
            ? void 0
            : _h.transactionHash) || null,
      })
    }
    if ('openseaInfo' in data && data.openseaInfo.creator) {
      eventsList.push({
        activityDescription: getString('BID_HISTORY_MINTED'),
        pricing: jsx_runtime_1.jsx(react_2.Fragment, {}, void 0),
        actor: data.openseaInfo.creator.address,
        createdAt: null,
        transactionHash: null,
      })
    }
    return eventsList
      .sort((bidA, bidB) => (bidA.createdAt > bidB.createdAt ? -1 : 1))
      .map((bidItem) =>
        react_1.createElement(
          'li',
          Object.assign({}, getStyles('fullPageHistoryItem'), {
            key: `${bidItem.actor}-${bidItem.createdAt}`,
          }),
          jsx_runtime_1.jsxs(
            'div',
            Object.assign({}, getStyles('fullPageHistoryItemDescription'), {
              children: [
                jsx_runtime_1.jsxs(
                  'div',
                  Object.assign(
                    {},
                    getStyles('fullPageHistoryItemDescriptionCopy'),
                    {
                      children: [
                        jsx_runtime_1.jsx(
                          AddressView_1.AddressView,
                          { address: bidItem.actor, showChars: 2 },
                          void 0
                        ),
                        '\u00A0',
                        jsx_runtime_1.jsxs(
                          'span',
                          Object.assign({}, getStyles('pricingAmount'), {
                            children: [
                              bidItem.activityDescription,
                              ' ',
                              bidItem.pricing,
                            ],
                          }),
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
                bidItem.transactionHash &&
                  style.theme.showTxnLinks &&
                  jsx_runtime_1.jsx(
                    'a',
                    Object.assign(
                      {},
                      getStyles('fullPageHistoryTxnLink'),
                      {
                        href: `https://etherscan.io/tx/${bidItem.transactionHash}`,
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      { children: getString('BID_HISTORY_VIEW_TRANSACTION') }
                    ),
                    void 0
                  ),
              ],
            }),
            void 0
          ),
          bidItem.createdAt &&
            jsx_runtime_1.jsx(
              'div',
              Object.assign({}, getStyles('fullPageHistoryItemMeta'), {
                children: jsx_runtime_1.jsx(
                  'time',
                  Object.assign(
                    {
                      dateTime: dateFromTimestamp(
                        bidItem.createdAt
                      ).toISOString(),
                    },
                    getStyles('fullPageHistoryItemDatestamp'),
                    { children: formatDate(bidItem.createdAt) }
                  ),
                  void 0
                ),
              }),
              void 0
            )
        )
      )
  }
  return jsx_runtime_1.jsx(
    InfoContainer_1.InfoContainer,
    Object.assign(
      { titleString: 'NFT_HISTORY', className: className },
      {
        children: jsx_runtime_1.jsx(
          'ol',
          Object.assign({}, getStyles('fullPageHistoryList'), {
            children: getPastBids(),
          }),
          void 0
        ),
      }
    ),
    void 0
  )
}
exports.BidHistory = BidHistory
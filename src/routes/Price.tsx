import { useQuery } from "react-query";
import { useParams, useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "./../api";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const ShowPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 15px;
`;
function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<PriceData>(["ohlcv", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <div>
      <ShowPrice>
        <span>PRICE : </span>
        <span>{data?.quotes.USD.price.toFixed(2)}</span>
      </ShowPrice>
      <ShowPrice>
        <span>percent_change_15m : </span>
        <span>{data?.quotes.USD.percent_change_15m}</span>
      </ShowPrice>
      <ShowPrice>
        <span>percent_change_30m : </span>
        <span>{data?.quotes.USD.percent_change_30m}</span>
      </ShowPrice>
      <ShowPrice>
        <span>percent_change_1h : </span>
        <span>{data?.quotes.USD.percent_change_1h}</span>
      </ShowPrice>
      <ShowPrice>
        <span>ath_price : </span>
        <span>{data?.quotes.USD.ath_price}</span>
      </ShowPrice>
      <ShowPrice>
        <span>ath_date : </span>
        <span>{data?.quotes.USD.ath_date}</span>
      </ShowPrice>
    </div>
  );
}

export default Price;

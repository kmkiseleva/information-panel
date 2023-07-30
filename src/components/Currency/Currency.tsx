// Core
import { FC } from "react";
import { observer } from "mobx-react-lite";

// Components
import { List, Typography } from "antd";

// Stores
import exchangeRatesStore from "../../store/ExchangeRatesStore";

// Styles
import "./currency.scss";

const Currency: FC = () => {
  const { rates, cryptocurrencies } = exchangeRatesStore;

  return (
    <div className="currency-container">
      <div className="rates">
        <Typography.Title level={2}>Exchange Rates:</Typography.Title>
        <List>
          {Object.entries(rates).map(([currency, rate]) => (
            <List.Item key={rate}>
              <Typography.Text>
                {currency}: {rate}
              </Typography.Text>
            </List.Item>
          ))}
        </List>
      </div>
      <div className="rates">
        <Typography.Title level={2}>Cryptocurrencies:</Typography.Title>
        <List>
          {Object.entries(cryptocurrencies).map(([symbol, price]) => (
            <List.Item key={price}>
              <Typography.Text>
                {symbol}: ${price}
              </Typography.Text>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default observer(Currency);

import { render, screen } from "@testing-library/react";
import * as React from "react";
import { EtherscanLink } from ".";
import { EthereumChainIds } from "../../utils/web3";

test("It renders a link with the text", () => {
  render(
    <EtherscanLink text="foo" chainId={EthereumChainIds.Mainnet} tx="tx" />
  );
  expect(screen.getByText("foo")).toBeInTheDocument();
});

test("It renders a link with the tx hash if no text is provided", () => {
  render(<EtherscanLink chainId={EthereumChainIds.Mainnet} tx="tx" />);
  expect(screen.getByText("tx")).toBeInTheDocument();
});

test("It renders a link with the address if no text is provided", () => {
  render(
    <EtherscanLink chainId={EthereumChainIds.Mainnet} address="address" />
  );
  expect(screen.getByText("address")).toBeInTheDocument();
});

test("It links to etherscan if network is mainnet", () => {
  render(
    <EtherscanLink chainId={EthereumChainIds.Mainnet} address="address" />
  );
  expect(screen.getByTestId("etherscan-link")).toHaveAttribute(
    "href",
    "https://etherscan.io/address/address"
  );
});

test("It links to ropsten etherscan if network is ropsten", () => {
  render(
    <EtherscanLink chainId={EthereumChainIds.Ropsten} address="address" />
  );
  expect(screen.getByTestId("etherscan-link")).toHaveAttribute(
    "href",
    "https://ropsten.etherscan.io/address/address"
  );
});

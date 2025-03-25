import { CalloutBox } from "./styles";

const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return <CalloutBox>{children}</CalloutBox>;
};

export default Callout;
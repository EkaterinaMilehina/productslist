import styled from 'styled-components';

export const Block = styled.div`
    padding: 40px;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    gap: 40px;
    align-items: center;
`;
export const ContainerCardImage = styled.div`
    border: 2px solid rgba(0, 123, 255, 0.2);
    width: 400px;
    height: 400px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.img`
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
`;

export const CardTitle = styled.h3`
    text-align: center;
    font-size: 22px;
`;

export const Price = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #007bff;
    border-bottom: 2px solid rgba(0, 123, 255, 0.2);
`;

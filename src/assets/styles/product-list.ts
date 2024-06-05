import styled from 'styled-components';

export const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    margin: 0;
    margin-bottom: 20px;
`;

export const Block = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const ProductItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 15px;
    transition: 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);

    &:hover {
        background-color: #007bff;
        color: white;
        box-shadow: none;
    }
`;

export const ProductTitle = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const BlockItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;

export const BlockLink = styled.div`
    flex-grow: 1;
`;

export default function Table({ products }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Imagem</th>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Avaliação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.image}</td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.rating.rate}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>Ini Konten</h1>
      <p>{prop.data}</p>
      <table>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
        <tr>
          <th>2</th>
          <td>4</td>
          <td>6</td>
          <td>8</td>
          <td>10</td>
        </tr>
        <tr>
          <th>3</th>
          <td>6</td>
          <td>9</td>
          <td>12</td>
          <td>15</td>
        </tr>
        <tr>
          <th>4</th>
          <td>8</td>
          <td>12</td>
          <td>16</td>
          <td>20</td>
        </tr>
        <tr>
          <th>5</th>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>25</td>
        </tr>
      </table>
    </section>
  );
}

export default Content;
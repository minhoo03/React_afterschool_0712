import $ from 'jquery'

export default function A04Library() {

    $(document).ready(function() {
        $('#btn').click(function() {
            var result = $('#qty').val()
            $('#result').html(result)
        })
    })

    return (
        <>
            <h3>A04 Library</h3>

            <input type="text" id="qty" className="form-control" /> 
            <button id="btn">Click</button>
            <h3 id="result"></h3>
        </>
    )
}

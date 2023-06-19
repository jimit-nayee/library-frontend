import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DeleteBookCard({ id, name, author, img, type, language, price, onDelete }) {

    const imageFormat = img.substring(img.lastIndexOf('.') + 1);

    return (
        <div style={{ padding: '20px', width: "max-content" }}>

            <Card style={{ backgroundColor: "lightgray", padding: "20px 40px", height: "300px" }}>
                <CardContent style={{ width: "300px", display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary" style={{ display: "flex", justifyContent: "start" }} gutterBottom>
                        {id}
                    </Typography>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography color="text.secondary">
                        Author Name: {author}
                    </Typography>

                    <Typography style={{ display: "flex", justifyContent: "center" }}>
                        <img src={`data:image/${imageFormat};base64,${img}`} alt="Book" style={{ width: "100px", height: "70px", objectFit: "cover" }} />
                    </Typography>

                    <Typography variant="body2" style={{ display: "flex", justifyContent: "space-between" }}>
                        <label>Book Type: {type}</label>
                        <label> Language:{language}</label>
                    </Typography>

                    <Typography style={{ padding: "10px" }}>
                        Price: ₹ {price}
                    </Typography>

                    <CardActions style={{ position: "absolute", top: "-20px", right: "-30px" }}>
                        <Button size="small" style={{
                            color: "white",
                            padding: "10px 20px",
                            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                            borderRadius: "10px",
                            // fontWeight: "bold",
                            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
                        }} onClick={onDelete}>Delete</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}
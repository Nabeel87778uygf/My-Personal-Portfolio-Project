import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const inputSx = {
    "& .MuiOutlinedInput-root": {
        color: "#ccd6f6",
        borderRadius: "8px",
        "& fieldset": { borderColor: "#00d4ff44" },
        "&:hover fieldset": { borderColor: "#00d4ff" },
        "&.Mui-focused fieldset": { borderColor: "#00d4ff" },
    },
    "& .MuiInputLabel-root": { color: "#8892b0", fontSize: "0.95rem" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00d4ff" },
};

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                    Contact <span className="text-accent">Me!</span>
                </h2>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-darkCard/50 p-6 sm:p-8 rounded-2xl border border-accent/20 shadow-xl"
                >
                    <TextField label="Full Name" fullWidth required sx={inputSx} />
                    <TextField label="Email Address" type="email" fullWidth required sx={inputSx} />
                    <TextField label="Mobile Number" fullWidth sx={inputSx} />
                    <TextField label="Email Subject" fullWidth sx={inputSx} />
                    <div className="sm:col-span-2">
                        <TextField
                            label="Your Message"
                            multiline
                            rows={5}
                            fullWidth
                            required
                            sx={inputSx}
                        />
                    </div>
                    <div className="sm:col-span-2 text-center mt-2">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: "#00d4ff",
                                color: "#0a192f",
                                fontWeight: "bold",
                                px: { xs: 6, sm: 8 },
                                py: 1.4,
                                borderRadius: "8px",
                                textTransform: "none",
                                fontSize: "1rem",
                                width: { xs: "100%", sm: "auto" },
                                "&:hover": { bgcolor: "#00b8e6" },
                            }}
                        >
                            Send Message
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
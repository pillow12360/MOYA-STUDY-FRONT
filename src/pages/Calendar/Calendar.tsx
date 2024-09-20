import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const localizer = momentLocalizer(moment);

const theme = createTheme({
  palette: {
    primary: {
      main: '#3182f6', // Toss blue
    },
    background: {
      default: '#f9fafc',
    },
  },
  typography: {
    fontFamily: "'Spoqa Han Sans Neo', 'sans-serif'",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 'bold',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
  },
});

interface Event {
  title: string;
  password: string;
  start: Date | null;
  end: Date | null;
}

function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({ title: '', password: '', start: null, end: null });

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setNewEvent({ title: '', password: '', start: null, end: null });
  };

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.password && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      handleDialogClose();
    }
  };

  const eventStyleGetter = () => {
    const style = {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '8px',
      opacity: 0.8,
      color: 'white',
      border: 'none',
      display: 'block',
    };
    return {
      style,
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh', bgcolor: 'background.default', p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
          예약 캘린더
        </Typography>
        <Box
          sx={{
            height: 'calc(100vh - 100px)',
            bgcolor: 'white',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            eventPropGetter={eventStyleGetter}
            views={['month', 'week', 'day']}
          />
        </Box>

        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>새 예약 만들기</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="목적"
              type="text"
              fullWidth
              variant="outlined"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="비밀번호"
              type="password"
              fullWidth
              variant="outlined"
              value={newEvent.password}
              onChange={(e) => setNewEvent({ ...newEvent, password: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              취소
            </Button>
            <Button onClick={handleCreateEvent} color="primary" variant="contained">
              예약하기
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default Calendar;

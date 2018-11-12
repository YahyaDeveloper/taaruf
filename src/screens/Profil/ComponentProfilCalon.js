import React, { Component } from "react";
import { View, Text, ScrollView, TextInput,StyleSheet} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import Header from "../../components/Header";
import ViewCV from '../../components/ViewCV';

class ComponentProfilCalon extends Component {
  state = {
    NamaLengkap: "",
    TahunKelahiran: "",
    Pekerjaan: "",
    PendidikanTerakhir: "",
    Domisili: "",
    DomisiliOrangTua: "",
    Status: "",
    Suku: "",
    TinggiBeratBadan: "",
    CiriFisik: "",
    Merokok: "",
    Bertato: "",
    HapalanQuran: "",
    AnakKeDariBerapaBersaudara: "",
    RiwayatPenyakit: "",
    KajianYangSudahDiikuti: "",
    KriteriaPasangan: "",
    Domisili: "",
    VisiMisiMenikah: "",
    TargetMenikah: "",
    HarapanSetelahMenikah: "",
    HalYangPerluDiSampaikan: ""
  };
  render() {
    

    let JenisKelamin = [
      {
        value: "Ikhwan/Laki-Laki"
      },
      {
        value: "Akhwat/Perempuan"
      }
    ]

    let PendidikanTerakhir = [
      {
        value:'Belum Sekolah'
      },
      {
        value:'TK'
      },
      {
      value:'SD'
    },
    {
      value:'SMP atau Sederajat'
    },
    {
      value:'SMA/SMK atau Sederajat'
    },
    {
      value:'D1'
    },
    {
      value:'D2'
    },
    {
      value:'D3'
    },
    {
      value:'D4'
    },
    {
      value:'S1'
    },
    {
      value:'S2'
    },
    {
      value:'S3'
    },
    {
      value:'Pondok Pesantren'
    }
  ]

    const {
        NamaLengkap,
        TahunKelahiran,
        Pekerjaan,
        Domisili,
        DomisiliOrangTua,
        Status,
        Suku,
        TinggiBeratBadan,
        CiriFisik,
        Merokok,
        Bertato,
        HapalanQuran,
        AnakKeDariBerapaBersaudara,
        RiwayatPenyakit,
        KajianYangSudahDiikuti,
        KriteriaPasangan,
        VisiMisiMenikah,
        TargetMenikah,
        HarapanSetelahMenikah,
        HalYangPerluDiSampaikan
    } = this.state;
    return (
      <View>
          <Header HeaderText={'CV Sebagai Calon'}/>
          <ScrollView style={{marginBottom:45}}>
          <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <Dropdown
            label="Jenis Kelamin"
            data={JenisKelamin}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Tahun Kelahiran (ex:1994)"
            onChangeText={text => this.setState({ TahunKelahiran: text })}
            value={TahunKelahiran}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Pekerjaan"
            onChangeText={text => this.setState({ Pekerjaan: text })}
            value={Pekerjaan}
          />
        </ViewCV>
        <ViewCV>
          <Dropdown
            label="Pendidikan Terakhir"
            data={PendidikanTerakhir}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Domisili (ex: Padang )"
            onChangeText={text => this.setState({ Domisili: text })}
            value={Domisili}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Domisili Orang Tua (ex: Jakarta)"
            onChangeText={text => this.setState({ DomisiliOrangTua: text })}
            value={DomisiliOrangTua}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        <ViewCV>
          <TextField
            label="Nama Lengkap"
            onChangeText={text => this.setState({ NamaLengkap: text })}
            value={NamaLengkap}
          />
        </ViewCV>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewDropDown:{
        marginLeft:10,
        marginRight:10
    }
})
export default ComponentProfilCalon;

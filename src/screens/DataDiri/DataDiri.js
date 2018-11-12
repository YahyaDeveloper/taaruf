import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";

class DataDiri extends Component {
  state = {
    NamaLengkap: "",
    JenisKelamin: "",
    TahunKelahiran: "",
    Pekerjaan: "",
    PendidikanTerakhir: "",
    Alamat: "",
    AlamatOrangTua: "",
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
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header HeaderText="Formulir Curiculum Vitae" />
        </View>
        <ScrollView>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ NamaLengkap: text })}
              value={this.state.NamaLengkap}
              placeholder="Nama Lengkap"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ JenisKelamin: text })}
              value={this.state.JenisKelamin}
              placeholder="Jenis Kelamin"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ TahunKelahiran: text })}
              value={this.state.TahunKelahiran}
              placeholder="Tahun Kelahiran"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Pekerjaan: text })}
              value={this.state.Pekerjaan}
              placeholder="Pekerjaan"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ PendidikanTerakhir: text })}
              value={this.state.PendidikanTerakhir}
              placeholder="Pendidikan Terakhir"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Alamat: text })}
              value={this.state.Alamat}
              placeholder="Alamat"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ AlamatOrangTua: text })}
              value={this.state.AlamatOrangTua}
              placeholder="Alamat Orang Tua"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Status: text })}
              value={this.state.Status}
              placeholder="Status"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Suku: text })}
              value={this.state.Suku}
              placeholder="Suku"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ TinggiBeratBadan: text })}
              value={this.state.TinggiBeratBadan}
              placeholder="Tinggi / Berat Badan"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ CiriFisik: text })}
              value={this.state.CiriFisik}
              placeholder="Ciri Fisik"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Merokok: text })}
              value={this.state.Merokok}
              placeholder="Merokok / Tidak"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Bertato: text })}
              value={this.state.Bertato}
              placeholder="Bertato / Tidak"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ HapalanQuran: text })}
              value={this.state.HapalanQuran}
              placeholder="Jumlah Hafalan Qur'an"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text =>
                this.setState({ AnakKeDariBerapaBersaudara: text })
              }
              value={this.state.AnakKeDariBerapaBersaudara}
              placeholder="Anak Keberapa ? Dari Berapa Bersaudara"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ RiwayatPenyakit: text })}
              value={this.state.RiwayatPenyakit}
              placeholder="Riwayat Penyakit"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text =>
                this.setState({ KajianYangSudahDiikuti: text })
              }
              value={this.state.KajianYangSudahDiikuti}
              placeholder="Kajian Yang Sudah Pernah Di Ikuti"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ KriteriaPasangan: text })}
              value={this.state.KriteriaPasangan}
              placeholder="Kriteria Pasangan Yang Di Inginkan"
            />
          </View>
          <View style={styles.viewDataDiri}>
            <TextInput
              onChangeText={text => this.setState({ Domisili: text })}
              value={this.state.Domisili}
              placeholder="Domisili"
            />
          </View>
          <View>
            <Button TextButton={"SAVE"} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewDataDiri: {
    marginTop: 5,
    borderWidth: 3,
    borderColor: "#00CC00",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FFFF",
    borderRadius: 60,
    paddingLeft: 20,
    marginLeft: 20,
    marginRight: 20
  },
  Textdaftar: {
    textAlign: "right",
    color: "#999966",
    fontSize: 16
  }
});
export default DataDiri;
